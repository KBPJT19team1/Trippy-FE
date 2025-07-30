<script setup>
import { ref } from "vue";
import router from "@/router";
import { numberWithCommas } from "@/assets/utils/index.js";
import AmountInput from "@/components/common/inputs/AmountInput.vue";
import NextButton from "@/components/common/NextButton.vue";

const amount = ref("");

const onClick = () => {

};

const onPressKey = (num) => {
  if (amount.value.length >= 10) return;

  if (amount.value === "0") {
    amount.value = String(num);
  } else {
    amount.value += String(num);
  }

  console.log(amount.value);
};

const onDelete = () => {
  if (!amount.value) return;
  amount.value = amount.value.slice(0, -1);
};
</script>

<template>
  <div class="flex flex-col w-full h-full justify-between">
    <div class="flex flex-col mb-4 grow items-center justify-center gap-4">
      <div class="flex flex-col gap-2 title2 text-center">
        <p>내 국민은행 계좌로</p>
        <p>얼마나 채울까요?</p>
      </div>
      <AmountInput v-model="amount" />
      <div class="w-full flex justify-between">
        <p class="body2 text-gray-500">토스뱅크 100-12323-2232</p>
        <p class="body2 text-blue-400">{{ `잔액 ${numberWithCommas(15000)}원` }}</p>
      </div>
    </div>
    <div class="mx-[-1rem] mb-2">
      <NextButton
        :title="'요청하기'"
        :disabled="!amount"
        :isRounded="false"
        @click="onClick"
      />
    </div>
    <div class="grid grid-cols-3 w-full gap-2">
      <button
        v-for="n in 9"
        :key="n"
        class="h-12 title2 font-normal rounded-lg active:bg-blue-100"
        @click="() => onPressKey(n)"
      >
        {{ n }}
      </button>
      <button
        class="h-12 title2 font-normal rounded-lg active:bg-blue-100"
        @click="() => onPressKey('00')"
      >
        00
      </button>
      <button
        class="h-12 title2 font-normal rounded-lg active:bg-blue-100"
        @click="() => onPressKey(0)"
      >
        0
      </button>
      <button
        class="h-12 title2 font-normal rounded-lg active:bg-blue-100"
        @click="onDelete"
      >
        ←
      </button>
    </div>
  </div>
</template>

<style scoped></style>
