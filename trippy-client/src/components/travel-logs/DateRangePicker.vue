<!-- DateRangePicker.vue -->
<template>
  <VueDatePicker
    v-model="dateRange"
    range
    format="yyyy.MM.dd"
    :enable-time-picker="false"
    @update:model-value="$emit('update:range', { start: dateRange[0], end: dateRange[1] })"
  />
</template>

<script setup>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const dateRange = ref([]);
</script>
