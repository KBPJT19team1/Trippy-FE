<script setup>
import { ref, watch } from "vue";
import { numberWithCommas } from "@/assets/utils/index.js";
import AmountInput from "@/components/common/inputs/AmountInput.vue";
import NextButton from "@/components/common/NextButton.vue";
import NumberKeypad from "@/components/common/NumberKeypad.vue";

const amount = ref("");

const isChecked = ref(true);

const emit = defineEmits(["next"]);

const onPressKey = (num) => {
  if (amount.value.length >= 10) return;

  if (amount.value === "0") {
    amount.value = String(num);
  } else {
    amount.value += String(num);
  }

  console.log(amount.value);
};

watch(isChecked, (newVal) => {
  if (!newVal) {
    amount.value = 15000 / 4;
  } else {
    amount.value = "";
  }
});

const onDelete = () => {
  if (!amount.value) return;
  amount.value = amount.value.slice(0, -1);
};

const onClick = () => {
  //api 연결할 때 금액 저장하는 스토어 호출에서 저장하기
  emit("next");
};
</script>

<template>
  <div class="flex flex-col w-full h-full justify-between">
    <div class="flex flex-col mb-4 grow items-center justify-center gap-4">
      <div class="flex flex-col gap-2 title2 text-center">
        <p>얼마를 보낼까요?</p>
        <div class="flex gap-3 subtitle2 text-gray-400">
          <button
            class="border-b border-b-gray-400"
            :class="isChecked ? 'text-blue-400 border-b-blue-400' : ''"
            @click="isChecked = !isChecked"
          >
            직접 입력하기
          </button>
          <button
            class="border-b border-b-gray-400"
            :class="isChecked ? '' : 'text-blue-400 border-b-blue-400'"
            @click="isChecked = !isChecked"
          >
            1/N나누기
          </button>
        </div>
      </div>
      <AmountInput v-model="amount" />
      <div class="w-full flex justify-between">
        <p class="body2 text-gray-500">토스뱅크 100-12323-2232</p>
        <p class="body2 text-blue-400">{{ `잔액 ${numberWithCommas(15000)}원` }}</p>
      </div>
    </div>
    <div class="mx-[-1rem] mb-2">
      <NextButton :title="'보내기'" :disabled="!amount" :isRounded="false" @click="onClick" />
    </div>
    <NumberKeypad @press-key="onPressKey" @delete="onDelete" type="amount" />
  </div>
</template>

<style scoped></style>
