<script setup>
import { RouterLink } from "vue-router";
import { ref, reactive } from "vue";
import { Icon } from "@iconify/vue";

const data = ref(false);

const accountData = reactive({
  name: "이소정",
  bank: "농협은행",
  account: "123456-789010",
  amount: 135000,
});
</script>

<template>
  <div class="flex flex-col bg-main-gradient w-full h-40 p-4 rounded-xl hover:opacity-90">
    <RouterLink v-if="!data" to="/personal-accounts/import">
      <div class="text-white flex flex-col items-center gap-2 my-auto">
        <Icon icon="material-symbols:add-2-rounded" class="w-16 h-16" />
        <div class="flex flex-col items-center">
          <h3 class="body1">대표계좌 등록하기</h3>
          <p class="caption3">빠르게 조회하고 싶은 계좌를 등록해보세요</p>
        </div>
      </div>
    </RouterLink>

    <div v-if="data" class="flex flex-col text-white gap-3 my-auto">
      <div class="flex justify-between">
        <p class="caption2">{{ accountData.name }}님의 계좌</p>
        <Icon icon="material-symbols:more-horiz" class="w-7 h-7" />
      </div>
      <div class="flex flex-col">
        <p class="body2">농협은행</p>
        <p class="subtitle1">123456-789010</p>
      </div>
      <div class="w-full flex justify-end">
        <h2 class="title1">135,000원</h2>
      </div>
    </div>
  </div>
</template>
