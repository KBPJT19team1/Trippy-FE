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
      v-if="label !== '휴대폰 번호'"
      type="text"
      :placeholder="placeholder"
      class="w-full h-12 border-[1px] border-gray-300 rounded-xl px-4 text-gray-400"
    >
    <input
      v-if="label === '휴대폰 번호'"
      type="text"
      :placeholder="placeholder"
      maxlength="11"
      class="w-full h-12 border-[1px] border-gray-300 rounded-xl px-4 text-gray-400"
      @input="$event.target.value = $event.target.value.replace(/[^0-9]/g, '')"
    >
  </div>
</template>
