<script setup>

import TrippyLogo from '../assets/svg/trippy-logo.svg'
import { useBottomButtonStore } from '@/stores/bottomButtonStore'

const buttonStore = useBottomButtonStore()

buttonStore.set('모임 계좌 만들기', '/group-account/step1')

</script>

<template>

  <div class="con mt-[30%]">
    <div class="text-center title3">
      모임을 더 쉽고, 재밌게
      <br>
      함께 쓰고 같이 보는 모임통장
    </div>
    <TrippyLogo class="w-[32vh] h-[auto] mt-[10vh]" />
  </div>
</template>

<style scoped>
.intro-text {
  text-align: center;
}
</style>
