<script setup>
import NextButton from "@/components/common/NextButton.vue";
import TrippyLogo from "@/assets/svg/trippy-logo.svg";
</script>

<template>
  <div class="mt-[30%]">
    <div class="text-center title3">
      모임을 더 쉽고, 재밌게
      <br />
      함께 쓰고 같이 보는 모임통장
    </div>
    <TrippyLogo class="w-[25vh] h-[auto] mt-[10vh] flex justfiy-center" />
  </div>
  <NextButton :title="'모임계좌 만들기'" :visible="true" :To="'group-account-step1'" />
</template>

<style scoped></style>
