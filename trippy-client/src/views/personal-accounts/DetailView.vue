<script setup>
import TransferButton from "@/components/common/TransferButton.vue";
</script>

<template>
  <div class="w-full h-full">
    <div class="bg-white flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <p class="body2">국민은행 123-1232312-123</p>
        <h1 class="title1">23,456,789원</h1>
      </div>
      <div class="flex gap-4">
        <TransferButton type="add" />
        <TransferButton type="send" />
      </div>
    </div>
  </div>
</template>
