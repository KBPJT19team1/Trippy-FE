<script setup>
import { ref } from "vue";

import TransferButton from "@/components/common/TransferButton.vue";
import CategoryChip from "@/components/common/CategoryChip.vue";
import transactions from "@/_dummy/transactions_dummy.json";

import { numberWithCommas, formatDateToKorean, extractTime } from "@/assets/utils/index.js";

const currentFilter = ref("all");
</script>

<template>
  <div class="w-full h-full">
    <div class="bg-white flex flex-col gap-8 pb-4">
      <div class="flex flex-col gap-2">
        <p class="body2">국민은행 123-1232312-123</p>
        <h1 class="title1">23,456,789원</h1>
      </div>
      <div class="flex gap-4">
        <TransferButton type="add" />
        <TransferButton type="send" />
      </div>
    </div>
    <div class="bg-gray-100 h-4 mx-[-16px]"></div>
    <div class="flex flex-col pt-4 gap-4">
      <select
        v-model="currentFilter"
        class="w-fit bg-transparent ml-[-0.5rem] body1 text-gray-500"
      >
        <option value="all">전체</option>
        <option value="deposit">입금</option>
        <option value="withdraw">출금</option>
      </select>

      <div
        v-for="(data, index) in transactions"
        class="flex flex-col gap-3">
        <p class="body2 text-gray-500">{{ formatDateToKorean(data.date) }}</p>
        <div
          v-for="(item, index) in data.transactions"
          class="flex justify-between">
          <div class="flex gap-3 items-center">
            <CategoryChip :category="item.category" />
            <div class="flex flex-col gap-1">
              <p class="subtitle1">{{ item.description }}</p>
              <p class="body2 text-gray-500">{{ extractTime(item.time) }}</p>
            </div>
          </div>
          <div class="flex flex-col gap-1 items-end">
            <p class="subtitle1">{{ item.type === "withdraw" ? `-${numberWithCommas(item.amount)}` : numberWithCommas(item.amount)}}원</p>
            <p class="body2 text-gray-500">{{ numberWithCommas(item.balance_after) }}원</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
