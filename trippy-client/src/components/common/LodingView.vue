<script setup>
const planeUrl = new URL("@/assets/svg/plane.svg", import.meta.url).href;
const logoUrl = new URL("@/assets/svg/trippy.svg", import.meta.url).href;
</script>

<template>
  <div class="w-[23.4375rem] h-[20rem] flex justify-center overflow-hidden">
    <div class="flex flex-col items-center justify-end mb-0">
      <!-- 비행기 이미지 -->
      <img
        :src="planeUrl"
        class="w-[4vw] h-auto overflow-hidden -mb-8 -mr-4 z-[2] animate-[flyInOut_4s_ease-in-out_infinite] origin-center"
      />
      <!-- 텍스트 로고 -->
      <img :src="logoUrl" class="mt-[1.75rem] w-[12.5rem]" />
    </div>
  </div>
</template>

<style>
@keyframes flyInOut {
  10% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 1;
  }

  30% {
    transform: translate(13.75rem, -6.875rem) scale(2) rotate(15deg);
    opacity: 1;
  }

  31% {
    transform: translate(15.625rem, -7.5rem) scale(2) rotate(10deg) rotateY(90deg);
    opacity: 1;
  }

  32% {
    transform: translate(15.625rem, -7.5rem) scale(2) rotate(-10deg) rotateY(180deg);
    opacity: 1;
  }

  38% {
    transform: translate(15.625rem, -7.5rem) scale(2) rotate(-10deg) rotateY(180deg);
    opacity: 1;
  }

  65% {
    transform: translate(-14.375rem, -10.625rem) scale(0.5) rotate(-15deg) rotateY(180deg);
    opacity: 1;
  }

  70% {
    transform: translate(-14.375rem, -8.125rem) scale(0.5) rotate(-15deg) rotateY(180deg);
    opacity: 1;
  }

  71% {
    transform: translate(-14.375rem, -3.75rem) scale(0.5) rotate(70deg);
    opacity: 1;
  }

  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 1;
  }
}
</style>
