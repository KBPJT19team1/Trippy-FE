<script setup>
import { onMounted, ref } from "vue";

import TrippyLogo from "@/assets/svg/trippy-logo.svg";

const createDate = ref("");

onMounted(() => {
  const now = new Date();
  createDate.value = now.toLocaleDateString();
});
</script>

<template>
  <TrippyLogo class="w-[24vh] mt-[9vh]" />

  <div class="border-b border-gray-400 w-full text-center">
    <h1 class="title1 mt-14">모임통장 개설완료</h1>
    <p class="body2 mt-2 mb-3 text-gray-500">이제 모임통장에 친구를 초대해보세요.</p>
  </div>

  <div class="flex justify-between w-full px-3 mt-4 text-body2 border-b border-gray-400">
    <p>계좌</p>
    <div class="flex flex-col items-end mb-4">
      <p>{{}}의 통장</p>
      <p>{{}}18447665765</p>
    </div>
  </div>

  <div class="flex justify-between w-full px-3 mt-4 text-body2 border-b border-gray-400">
    <p>모임통장 개설일</p>
    <div class="flex flex-col items-end mb-4">
      <p class="subtitle2">{{ createDate }}</p>
    </div>
  </div>
</template>

<style scoped></style>
