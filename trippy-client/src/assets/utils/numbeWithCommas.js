// 숫자 3자리마다 콤마(,) 붙여주는 함수
export function numberWithCommas(x) {
  if (typeof x !== "number" && typeof x !== "string") return x;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
