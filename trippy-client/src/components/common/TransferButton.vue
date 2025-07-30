<script setup>
import { defineProps } from "vue";

const props = defineProps({
  type: String,
});
</script>

<template>
  <button
    class="w-full h-12 button1 rounded-xl"
    :class="[type==='add' ? 'bg-blue-200 text-blue-400' : 'bg-main-gradient text-white']"
  >
    {{ type === "add" ? "채우기" : "보내기" }}
  </button>
</template>
