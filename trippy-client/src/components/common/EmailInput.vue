<script setup>
const model = defineModel();
</script>

<template>
  <div class="flex justify-center h-12 w-[21.4375rem] ">
    <input v-model="model" type="email" placeholder="이메일을 입력해 주세요"
      class="w-full bg-gray-200 rounded-[0.625rem] px-6 py-4 text-gray-500 placeholder-gray-500 text-center focus:outline-none caption1" />
  </div>
</template>

<style scoped></style>
