<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

function formatDate(info) {
  return `${new Date(info.date).getMonth() + 1}.${new Date(info.date).getDate()}(${info.dayOfWeek}) ${info.time}`;
}
</script>

<template>
  <div class="w-full bg-white rounded-xl shadow-custom px-4 py-3 flex flex-col">
    <!-- 숙소 이름 및 객실 -->
    <div class="flex flex-col gap-1">
      <span class="subtitle1 text-black">{{ data.hotelName }}</span>
      <span class="caption1 text-gray-500"> {{ data.roomType }} · {{ data.nights }}박 </span>
    </div>

    <!-- 체크인/체크아웃 -->
    <div class="flex justify-between items-center mt-4 text-black subtitle2">
      <div class="flex flex-col items-start">
        <span class="caption1 text-gray-500">체크인</span>
        <span class="subtitle1">{{ formatDate(data.checkIn) }}</span>
      </div>

      <div class="w-px bg-gray-300 h-8 border-opacity-20"></div>

      <div class="flex flex-col items-end">
        <span class="caption1 text-gray-500">체크아웃</span>
        <span class="subtitle1">{{ formatDate(data.checkOut) }}</span>
      </div>
    </div>

    <!-- 버튼 -->
    <div class="mt-4">
      <button class="w-full bg-blue-200 text-blue-400 py-3 rounded-xl text-button2 text-center">
        바우처 보기
      </button>
    </div>
  </div>
</template>
