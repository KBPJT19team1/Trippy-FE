<script setup>
import { onMounted, onUnmounted } from "vue";

defineProps({
  message: {
    type: String,
    default: "로딩 중입니다...", // default 메시지
  },
});

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <!-- 위의 상단 탭바는 살려두고 아래에만 로딩 -->
  <!-- <div
    class="absolute top-[100px] left-0 right-0 h-[calc(100vh)] z-[999] bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center"
  > -->
  <!-- 전체 뷰에 로딩  -->
  <div
    class="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center"
  >
    <svg class="animate-spin h-16 w-16 mb-4" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="20" stroke="white" stroke-width="6" fill="none" />

      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="url(#mainGradient)"
        stroke-width="6"
        stroke-linecap="round"
        stroke-dasharray="110"
        stroke-dashoffset="35"
        fill="none"
      />

      <!-- svg에 tailwind 설정 컬러 적용이 안되는 문제로 추가 정의 -->
      <defs>
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6AE4FF" />
          <stop offset="25.9%" stop-color="#236FFF" />
          <stop offset="50.94%" stop-color="#236FFF" />
          <stop offset="100%" stop-color="#A38EFF" />
        </linearGradient>
      </defs>
    </svg>
    <p class="text-white button1">{{ message }}</p>
  </div>
</template>
