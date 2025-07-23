<template>
  <div class="w-full h-[34rem] bg-white">
    <div class="mt-5">
      <h1 class="text-xl font-bold">실물 주민등록증을 준비해주세요</h1>
      <p class="mt-4">모바일 주민등록증 등록을 위해<br />실물 주민등록증 촬영이 필요합니다.</p>
    </div>

    <div class="mt-20 flex-1 flex flex-col items-center justify-center">
      <img :src="Idcard" class="w-[19.5rem] h-auto mb-2" />
    </div>

    <!-- TODO: 버튼 -->
    <button
      class="w-full py-3 rounded-lg bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 items-center text-white font-semibold text-center shadow-sm"
    >
      주민등록증 촬영 시작하기
    </button>
  </div>
</template>

<script setup>
import Idcard from "@/assets/Idcard.png";
</script>

<style scoped></style>
