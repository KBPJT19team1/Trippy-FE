<script setup>
import NextButton from "@/components/common/NextButton.vue";
import { ref } from "vue";

const amount = ref("");
const isFocused = ref(false);
const hiddenInput = ref(null);

const focusInput = () => {
  hiddenInput.value?.focus();
};
const onInput = (event) => {
  const raw = event.target.value.replace(/[^0-9]/g, "").replace(/^0+/, "");
  amount.value = raw ? Number(raw).toLocaleString() : "";
};
</script>

<template>
  <div class="flex flex-col w-full h-full justify-between">
    <div class="flex flex-col flex1 items-center items-center py-24">
      <div class="">
        <p class="title2">얼마를 요청할까요?</p>
      </div>

      <div @click="focusInput" class="rounded-xl w-full flex justify-center mt-6">
        <div class="border-b border-b-gray-400 w-full h-full text-center py-3">
          <input
            type="text"
            inputmode="numeric"
            class="text-center bg-transparent title4 outline-none"
            :class="amount ? 'text-gray-600' : 'text-gray-400'"
            v-model="amount"
            @input="onInput"
            @focus="isFocused = true"
            @blur="isFocused = false"
            :placeholder="!amount && !isFocused ? '금액을 입력해 주세요' : ''"
            ref="hideenInput"
          />
        </div>
      </div>
    </div>

    <NextButton :title="'요청하기'" :disabled="!amount" />
  </div>
</template>

<style scoped></style>
