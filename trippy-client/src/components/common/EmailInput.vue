<script setup>
const model = defineModel();
</script>

<template>
  <div class="flex justify-center h-12 w-[21.4375rem] ">
    <input v-model="model" type="email" placeholder="이메일을 입력해 주세요"
      class="w-full px-6 py-4 bg-gray-200 text-center text-break placeholder-gray-500 rounded-[0.625rem] caption1" />
  </div>
</template>

<style scoped></style>
