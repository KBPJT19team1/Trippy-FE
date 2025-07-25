<script setup>
const props = defineProps({
  qrImage: { type: String, required: true }, // QR 코드 이미지
  progress: { type: Number, default: 0 }, // 진행률 (0~100)
  timeLeft: { type: Number, default: 0 }, // 남은 시간 (초)
});
</script>

<template>
  <div class="flex flex-col">
    <!-- QR 코드 영역 -->
    <div class="w-32 h-32 mb-3 bg-white rounded-md flex items-center justify-center mx-auto">
      <img :src="qrImage" alt="QR Code" class="max-w-full max-h-full" />
    </div>

    <!-- 진행바 -->
    <div class="w-full h-1 bg-gray-200 rounded-full mt-1">
      <div class="h-1 bg-blue-500 rounded-full" :style="{ width: progress + '%' }"></div>
    </div>

    <!-- 남은 시간 -->
    <p class="mt-1 text-gray-400 caption3">남은 시간: {{ timeLeft }}초</p>
  </div>
</template>
