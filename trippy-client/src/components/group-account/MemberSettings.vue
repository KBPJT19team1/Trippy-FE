<script setup>
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";
import ToggleSwitch from "../common/ToggleSwitch.vue";

const props = defineProps({
  account: Object,
  member: Array,
});
</script>

<template>
  <div class="w-full h-full overflow-scroll [&::-webkit-scrollbar]:hidden">
    <div class="flex flex-col gap-2 border-b border-b-gray-400 pb-3 px-2">
      <div class="caption2">
        {{ `${props.account.accountBank}  ${props.account.accountNumber}` }}
      </div>
      <div class="subtitle1">{{ `${props.account.accountName}의 계좌` }}</div>
    </div>
    <div class="flex flex-col gap-2 my-5 px-2">
      <div class="flex gap-9 caption1">
        <p>모임시작일</p>
        <p>{{ props.account.createDate }}</p>
      </div>
    </div>

    <div class="bg-gray-200 caption1 py-1 px-2">모임설정</div>
    <div class="flex justify-between caption1 py-4 border-b border-b-gray-300 px-2">
      <p class="">모임멤버</p>
      <div class="flex items-center">
        {{ `(${member.length}명)` }}
        <Icon icon="material-symbols:arrow-back-ios-new-rounded" class="rotate-180" />
      </div>
    </div>
    <div class="flex justify-between caption1 py-4 border-b border-b-gray-300 px-2">
      <p class="">친구초대</p>
      <Icon icon="material-symbols:arrow-back-ios-new-rounded" class="rotate-180" />
    </div>
    <div class="flex justify-between items-center caption1 py-3 border-b border-b-gray-300 px-2">
      <p>모임알림</p>
      <ToggleSwitch />
    </div>
    <div class="flex justify-between items-center caption1 py-3 border-b border-b-gray-300 px-2">
      <p>입출금 알림</p>
      <ToggleSwitch />
    </div>
    <div class="flex justify-between caption1 py-4 px-2 border-b border-b-gray-300">
      <p class="">모임통장 나가기</p>
      <Icon icon="material-symbols:arrow-back-ios-new-rounded" class="rotate-180" />
    </div>
  </div>
</template>

<style scoped></style>
