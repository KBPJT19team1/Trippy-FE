<!-- FloatingAddButton.vue -->

<script setup>
import { defineEmits } from "vue";
import { Icon } from "@iconify/vue";

const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
};
</script>

<template>
  <button
    @click="onClick"
    class="felx bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
  >
    <Icon icon="material-symbols:add-2-rounded" class="size-10 text-white" />
  </button>
</template>

<style scoped></style>
