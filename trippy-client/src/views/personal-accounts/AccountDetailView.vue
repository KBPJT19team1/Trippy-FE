<script setup>
import { Icon } from "@iconify/vue";
import TransferButton from "@/components/common/TransferButton.vue";
import CategoryChip from "@/components/common/CategoryChip.vue";
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
    <div class="bg-gray-100 h-6 mx-[-16px]"></div>
    <div class="py-4">
      <div class="flex gap-2 items-center text-gray-500">
        <p class="body1">전체</p>
        <Icon icon="material-symbols:arrow-forward-ios-rounded" class="w-4 h-4 rotate-90" />
      </div>
      <div>
        <CategoryChip title="식비" :isSelect="true" />
        <CategoryChip title="교통비" :isSelect="false" />
      </div>
    </div>
  </div>
</template>
