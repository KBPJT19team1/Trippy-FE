<script setup>
import { onMounted } from 'vue';
import TrippyLogo from '../assets/svg/trippy-logo.svg'
import { useBottomButtonStore } from '@/stores/bottomButtonStore';

const buttonStore = useBottomButtonStore()


onMounted(() => {
  buttonStore.set('다음', '/group-account/step2')
  buttonStore.visited(false)
})
</script>

<template>
  <div class="con">
    <TrippyLogo class="w-64 mt-32" />
    <div>hi</div>
  </div>

</template>

<style scoped></style>
