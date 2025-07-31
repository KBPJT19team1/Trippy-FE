<script setup>
import NextButton from "@/components/common/NextButton.vue";
import { numberWithCommas } from "@/assets/utils/index.js";
import TrippyLogo from "@/assets/svg/trippy-logo.svg";
import router from "@/router";

const onClick = () => {
  router.push({ name: "home" });
};
</script>

<template>
  <div class="flex flex-col w-full h-full justify-between">
    <div class="flex flex-col grow gap-8 title2 items-center justify-center mb-4">
      <TrippyLogo class="w-40" />
      <div class="flex flex-col gap-2 items-center">
        <h3>모임원들의 계좌로</h3>
        <h3>{{ `${numberWithCommas(100000)}원을` }}</h3>
        <h3>보냈어요</h3>
      </div>
    </div>
    <NextButton title="완료" :disabled="false" @click="onClick" />
  </div>
</template>
