<script setup>

import { onMounted } from 'vue';
import TrippyLogo from '../assets/svg/trippy-logo.svg'
import { useBottomButtonStore } from '@/stores/bottomButtonStore';

const buttonStore = useBottomButtonStore()


onMounted(() => {
  buttonStore.set('다음', '/group-account/step2')


})
</script>

<template>
  <TrippyLogo />


</template>

<style scoped></style>
