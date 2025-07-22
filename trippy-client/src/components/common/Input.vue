<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
});
</script>

<template>
  <div class="flex flex-col gap-1">
    <p class="body1 text-gray-400">{{ label }}</p>
    <input
      type="text"
      :placeholder="placeholder"
      class="w-full h-12 border-[1px] border-gray-300 rounded-xl px-4 text-gray-400"
    >
  </div>
</template>
