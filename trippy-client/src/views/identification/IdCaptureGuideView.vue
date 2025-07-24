<script setup>
import Idcard from "@/assets/Idcard.png";
</script>

<template>
  <div class="w-full h-[34rem] bg-white">
    <div class="mt-5">
      <h1 class="title2">실물 주민등록증을 준비해주세요</h1>
      <p class="mt-4 body1">
        모바일 주민등록증 등록을 위해<br />실물 주민등록증 촬영이 필요합니다.
      </p>
    </div>

    <div class="mt-20 flex-1 flex flex-col items-center justify-center">
      <img :src="Idcard" class="w-[19.5rem] h-auto mb-2" />
    </div>

    <!-- TODO: 버튼 교체 -->
    <button
      class="w-full py-3 rounded-lg bg-main-gradient items-center text-white button1 text-center shadow-sm"
    >
      주민등록증 촬영 시작하기
    </button>
  </div>
</template>
