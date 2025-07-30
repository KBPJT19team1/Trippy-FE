<script setup>
import { useRouter } from "vue-router";
import TrippyLogo from "@/assets/svg/trippy-logo.svg";
import NextButton from "@/components/common/NextButton.vue";
import { numberWithCommas } from "@/assets/utils/index.js";

const router = useRouter();
</script>

<template>
  <div class="flex flex-col w-full h-full justify-between">
    <div class="flex flex-col grow gap-2 title2 items-center justify-center mb-4">
      <TrippyLogo class="w-40 mb-8" />
      <h3>내 국민은행 계좌로</h3>
      <h3>{{ `${numberWithCommas(100000)}원을` }}</h3>
      <h3>보냈어요</h3>
    </div>
    <NextButton :title="'완료'" @click="router.push('/')" />
  </div>
</template>

<style scoped></style>
