<script setup>
const props = defineProps({
  infoText: { type: String, required: true },
  date: { type: String, required: true },
  dateLabel: { type: String, default: "" },
});
</script>

<template>
  <div class="p-4 mt-auto">
    <div class="flex items-center justify-between">
      <!-- 왼쪽 안내 문구 -->
      <p class="text-gray-500 caption2">{{ infoText }}</p>
      <p class="subtitle2">{{ date }}</p>
    </div>
  </div>
</template>
