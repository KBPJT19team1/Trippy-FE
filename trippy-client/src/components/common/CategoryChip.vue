<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  isSelect: Boolean,
});
</script>

<template>
  <div
    class="flex items-center justify-center w-fit px-4 h-6 rounded-full"
    :class="[props.isSelect ? 'bg-blue-200 text-blue-400' : 'bg-gray-200 text-gray-500']"
  >
    <span class="caption2">{{ props.title }}</span>
  </div>
</template>
