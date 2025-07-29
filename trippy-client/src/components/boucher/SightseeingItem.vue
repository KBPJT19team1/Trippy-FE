<script setup>
import { computed } from "vue";
import { formatDateTimeToVoucher } from "@/assets/utils/formatDateTimeToVoucher.js";

const props = defineProps({
  data: Object,
});

const dateText = computed(() => formatDateTimeToVoucher(props.data.date));
</script>

<template>
  <div class="bg-white rounded-xl px-4 py-3 shadow-custom flex flex-col gap-2">
    <div class="flex flex-col gap-1">
      <p class="subtitle1 text-black mb-2 pt-1">{{ props.data.title }}</p>
      <div class="caption1 text-gray-400">예약 일자</div>
      <div class="subtitle1 text-black">{{ dateText }}</div>
    </div>
    <button
      class="mt-2 w-full bg-blue-200 text-blue-400 py-2.5 text-button2 rounded-xl"
      @click="$emit('click')"
    >
      바우처 보기
    </button>
  </div>
</template>
