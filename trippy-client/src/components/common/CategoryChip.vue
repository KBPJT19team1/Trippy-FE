<script setup>
import { defineProps } from "vue";

const props = defineProps({
  category: String,
  isSelect: Boolean,
});
</script>

<template>
  <div
    class="flex items-center justify-center w-14 h-7 rounded-full"
    :class="[props.category === '수입' ? 'bg-green-100 text-green-200' : 'bg-blue-200 text-blue-400']"
  >
    <span class="caption2">{{ props.category }}</span>
  </div>
</template>
