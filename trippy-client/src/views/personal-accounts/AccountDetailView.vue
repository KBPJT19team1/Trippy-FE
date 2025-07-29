<script setup>
import { Icon } from "@iconify/vue";
import TransferButton from "@/components/common/TransferButton.vue";
import CategoryChip from "@/components/common/CategoryChip.vue";
import transactions from "@/_dummy/transactions_dummy.json";
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
    <div class="flex flex-col gap-4 py-4">
      <div class="flex gap-1 items-center text-gray-500">
        <p class="body2">전체</p>
        <Icon icon="material-symbols:arrow-forward-ios-rounded" class="size-3 rotate-90" />
      </div>
      <!-- 거래내역 리스트 -->
      <!-- Todo: 거래내역 카테고리 칩 위치 고민 -->

      <div
        v-for="(data, index) in transactions"
        class="flex flex-col gap-2">
        <p class="body2 text-gray-500">7월 28일</p>
        <div class="flex justify-between">
          <div class="flex gap-2 items-center">
            <CategoryChip :title="data.category" :isSelect="true" />
            <div class="flex flex-col gap-1">
              <p class="subtitle1">{{ data.description }}</p>
              <p class="body2 text-gray-500">14:06</p>
            </div>
          </div>
          <div class="flex flex-col gap-1 items-end">
            <p class="subtitle1">{{ data.type === "withdraw" ? `-${data.amount}` : data.amount}}원</p>
            <p class="body2 text-gray-500">{{ data.balance_after }}원</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
