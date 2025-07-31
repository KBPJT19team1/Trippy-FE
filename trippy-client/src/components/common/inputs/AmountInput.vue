<script setup>
import { ref } from "vue";
import { numberWithCommas } from "@/assets/utils/index.js";

const amount = defineModel();

const hiddenInput = ref(null);
const isFocused = ref(false);

const onInput = (event) => {
  amount.value = event.target.value
    .replace(/[^0-9]/g, "")
    .replace(/^0+/, "")
    .slice(0, 10);
};

const focusInput = () => {
  hiddenInput.value?.focus();
};
</script>

<template>
  <div @click="focusInput" class="w-full flex justify-center">
    <div
      :class="[
        'w-full h-full text-center py-3 border-b',
        isFocused ? 'border-b-blue-500' : 'border-b-gray-400',
      ]"
    >
      <div class="title4" :class="amount ? 'text-gray-600' : 'text-gray-400'">
        <p>{{ amount ? `${numberWithCommas(amount)} 원` : "금액을 입력해 주세요" }}</p>
      </div>

      <input
        type="text"
        inputmode="numeric"
        pattern="[0-9]*"
        class="sr-only"
        v-model="amount"
        @input="onInput"
        ref="hiddenInput"
        readonly
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
    </div>
  </div>
</template>

<style scoped></style>
