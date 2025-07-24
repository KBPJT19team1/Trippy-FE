<!-- src/components/payment/PaymentMethodItem.vue -->
<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});

// SVG 아이콘 import
import DetailIcon from "@/assets/svg/detail.svg";
</script>

<template>
  <div class="flex items-center h-[80px] border-b border-[#F4F5F7] bg-white pr-4">
    <!-- 카드 로고 박스 -->
    <div
      class="flex items-center justify-center rounded-[10px] mr-4 overflow-hidden"
      :style="{ background: card.bgColor, width: '92px', height: '48px' }"
    >
      <component :is="card.logo" class="max-w-[60%] max-h-[60%] w-auto h-auto" />
    </div>

    <!-- 카드 이름 및 번호 -->
    <div class="flex-1">
      <div class="caption1">{{ card.name }}</div>
      <div class="caption1">{{ card.number }}</div>
    </div>

    <!-- 옵션 버튼 -->
    <button class="ml-2 p-2" aria-label="카드 옵션">
      <DetailIcon class="w-6 h-6 text-gray-500" />
    </button>
  </div>
</template>
