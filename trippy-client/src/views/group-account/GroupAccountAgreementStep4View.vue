<script setup>
import { Icon } from "@iconify/vue";
import accountList from "@/_dummy/accountList_dummy.json";
</script>

<template>
  <div>
    <p class="title1 mt-40">대표계좌를 설정해 주세요</p>
  </div>

  <div
    class="w-full text-center bg-gray-200 rounded-xl h-16 mt-10 flex items-center justify-center gap-8"
  >
    <p class="button1 text-gray-400 text-center ml-20">대표계좌를 선택해 주세요</p>
    <Icon icon="material-symbols:keyboard-arrow-down-rounded" class="transform size-9" />
  </div>

  <div class="w-full bg-gray-200 mt-[-2vh] rounded-xl">
    <ul class="mx-4 py-2">
      <li v-for="(account, i) in accountList" :key="i" class="my-3">
        <div class="flex justify-between">
          <p class="body2">{{ account.bankName }}</p>
          <P class="body2">{{ account.account }}</P>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
