import { nextTick } from "vue";

export function useCameraDetection(video, guideBox, detected) {
  const ORI_BOX_W = 300;
  const ORI_BOX_H = 200;
  let captured = false; // 중복 캡처 방지용
  let stream, canvas, ctx;

  function startDetection() {
    const checkFrame = () => {
      if (!video.value || typeof cv === "undefined") {
        requestAnimationFrame(checkFrame);
        return;
      }

      // 원본 해상도
      const vw = video.value.videoWidth;
      const vh = video.value.videoHeight;
      if (!vw || !vh) {
        requestAnimationFrame(checkFrame);
        return;
      }

      canvas.width = vw;
      canvas.height = vh;
      ctx.drawImage(video.value, 0, 0, vw, vh);

      // 프레임 중앙 기준 사각형 자르기
      const boxX = (vw - ORI_BOX_W) / 2;
      const boxY = (vh - ORI_BOX_H) / 2;
      const frame = ctx.getImageData(boxX, boxY, ORI_BOX_W, ORI_BOX_H);

      // 사각형 탐지
      let src = cv.matFromImageData(frame);
      let gray = new cv.Mat();
      let blurred = new cv.Mat();
      let edges = new cv.Mat();

      cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY); //그레이스 스케일 변환
      cv.GaussianBlur(gray, blurred, new cv.Size(5, 5), 0); // 노이즈 제거
      cv.Canny(blurred, edges, 50, 150); // 에지 검출

      let contours = new cv.MatVector();
      let hierarchy = new cv.Mat();
      cv.findContours(edges, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

      // 사각형 판정
      let foundRectangle = false;
      for (let i = 0; i < contours.size(); i++) {
        let contour = contours.get(i);
        let approx = new cv.Mat();
        cv.approxPolyDP(contour, approx, 0.02 * cv.arcLength(contour, true), true);

        if (approx.rows === 4) {
          // 꼭짓점이 4개면
          let rect = cv.boundingRect(approx);
          let aspect = rect.width / rect.height; // 가로 세로 비율
          let area = cv.contourArea(approx); // 면적

          if (area > 40000 && aspect > 1.4 && aspect < 1.8) {
            // // 신분증 비율 1.6:1 , 오차 +-0.2
            foundRectangle = true;
          }
        }

        approx.delete();
        contour.delete();
      }

      detected.value = foundRectangle; // 감지 여부

      ////////////////////////////////////////
      // 신분증이 감지되면 이미지 PNG로 저장
      if (foundRectangle && !captured) {
        captured = true; // 한 번만 캡처

        // 캡처용 캔버스 생성
        const captureCanvas = document.createElement("canvas");
        captureCanvas.width = ORI_BOX_W;
        captureCanvas.height = ORI_BOX_H;
        const captureCtx = captureCanvas.getContext("2d");

        // 비디오 프레임에서 중앙 영역만 추출
        captureCtx.drawImage(
          video.value,
          boxX,
          boxY,
          ORI_BOX_W,
          ORI_BOX_H, // 원본 비디오 좌표
          0,
          0,
          ORI_BOX_W,
          ORI_BOX_H, // 캔버스에 맞춰서 그리기
        );

        // PNG 데이터 URL 생성
        const imageDataUrl = captureCanvas.toDataURL("image/png");

        // PNG 파일로 다운로드
        const link = document.createElement("a");
        link.href = imageDataUrl;
        link.download = "captured_id.png"; // 저장할 파일명
        link.click();

        //console.log("PNG 저장 완료");
      }

      ////////////////////////////////////////

      // 수동 메모리 해제 (OpenCV)
      src.delete();
      gray.delete();
      blurred.delete();
      edges.delete();
      contours.delete();
      hierarchy.delete();

      // 화면 좌표로 변환해서 guideBox 갱신
      const vRect = video.value.getBoundingClientRect();
      const contW = vRect.width;
      const contH = vRect.height;

      const s = Math.max(contW / vw, contH / vh); // 스케일 보정
      const realVidW = vw * s;
      const realVidH = vh * s;
      const offsetX = (realVidW - contW) / 2;
      const offsetY = (realVidH - contH) / 2;

      guideBox.value = {
        left: boxX * s - offsetX,
        top: boxY * s - offsetY,
        width: ORI_BOX_W * s,
        height: ORI_BOX_H * s,
      };

      requestAnimationFrame(checkFrame);
    };

    requestAnimationFrame(checkFrame);
  }

  // 카메라 연결 + 탐지 시작
  function startCameraAndDetection() {
    navigator.mediaDevices
      .getUserMedia({
        // 카메라, 마이크 권한 요청 API
        video: {
          width: { ideal: 720 },
          height: { ideal: 1280 },
          aspectRatio: 9 / 16,
          facingMode: "environment", // 후면 카메라 우선 요청
        },
      })
      .then((mediaStream) => {
        stream = mediaStream;
        nextTick(() => {
          // 렌더링 끝나고 DOM 준비 후 실행 보장
          if (video.value) {
            video.value.srcObject = stream; // 카메라 연결

            canvas = document.createElement("canvas"); // <canvas> 동적 생성
            ctx = canvas.getContext("2d", { willReadFrequently: true }); // 픽셀 읽기

            startDetection(); // OpenCV 초기화 후 탐지 시작
          }
        });
      })
      .catch((e) => alert("Camera access error: " + e.message));
  }

  return { startCameraAndDetection };
}
