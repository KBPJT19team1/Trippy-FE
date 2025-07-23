<script setup>
import { defineModel, ref } from 'vue';

const pin = defineModel();

const hiddenInput = ref(null)

const onInput = (event) => {
  const value = event.target.value
  pin.value = value.slice(0, 4)
};
const focusInput = () => {
  hiddenInput.value?.focus()
}
</script>

<template>
  <div @click="focusInput" class="flex items-center
 justify-between bg-white m-2 w-full h-15 p-4 rounded-xl hover:opacity-90 shadow-custom body2 text-gray-600">
    <p>통장 비밀번호 만들기</p>
    <input type="number" class="sr-only" v-model="pin" @input="onInput" ref="hiddenInput" />
    <div class="flex gap-2">
      <div v-for="i in 4" :key="i" :class="[i <= pin.length ? 'bg-main-gradient' : 'bg-gray-300']"
        class="bg-gray-300 w-4 h-4 rounded-[50%]"></div>
    </div>
  </div>
</template>

<style scoped></style>
