<script setup>
import { ref } from "vue";
import AmountInput from "@/components/common/inputs/AmountInput.vue";

const account = ref("");
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex flex-col gap-8">
      <h2 class="title2">어떤 계좌로 보낼까요?</h2>
      <AmountInput v-model="account" type="account" />
    </div>
  </div>
</template>
