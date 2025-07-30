<script setup>
import router from "@/router";
import { useGroupJoinStore } from "@/stores/groupAccountJoinStore";
import TrippyLogo from "@/assets/svg/trippy-logo.svg";
import NextButton from "@/components/common/NextButton.vue";
import { onMounted, ref } from "vue";

const joinStore = useGroupJoinStore();
const groupAccountName = ref("");

onMounted(() => {
  groupAccountName.value = joinStore.groupAccountName;
});
</script>

<template>
  <div class="flex flex-col h-full justify-between w-full items-center">
    <div class="flex flex-col items-center mt-28">
      <TrippyLogo class="w-40" />
      <div class="title1 text-center mt-8">
        <p>{{ groupAccountName }}의 모임에</p>
        <p>참여하기가 완료되었습니다.</p>
      </div>
    </div>
    <NextButton :title="'완료'" @click="router.push({ name: 'home' })" />
  </div>
</template>

<style scoped></style>
