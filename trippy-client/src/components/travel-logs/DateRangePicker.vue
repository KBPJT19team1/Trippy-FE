<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const dateRange = ref([]);
</script>

<template>
  <VueDatePicker
    v-model="dateRange"
    range
    format="yyyy.MM.dd"
    :enable-time-picker="false"
    @update:model-value="$emit('update:range', { start: dateRange[0], end: dateRange[1] })"
    input-class-name="custom-datepicker-input"
  />
</template>

<style scoped>
/* DatePicker의 input 필드에 스타일 적용 */
:deep(.dp__input) {
  @apply w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400;
}
</style>
