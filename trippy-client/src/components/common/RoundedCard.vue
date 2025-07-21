<script setup>
defineProps({
  text: String,
  onClick: Function,
});
</script>

<template>
  <div
    @click="onClick"
    class="w-full h-40 bg-white rounded-xl shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition"
  >
    <span class="text-lg font-semibold">{{ text }}</span>
  </div>
</template>
