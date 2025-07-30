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
  />
</template>

<style scoped>
:deep(.dp__input) {
  @apply body2 text-gray-400 w-full h-12 border border-gray-300 rounded-xl px-4;
}
</style>
