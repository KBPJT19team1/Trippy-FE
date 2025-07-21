<script setup>
import router from '@/router'
import { useBottomButtonStore } from '@/stores/bottomButtonStore'
import { computed } from 'vue'

const buttonStore = useBottomButtonStore()

const disabled = computed(() => !buttonStore.visible)

const handleClick = () => {
  router.push(buttonStore.routeTo)
}

</script>

<template>
  <button :class="[buttonStore.visible === false ? 'bg-gray-400' : 'bg-main-gradient']" :disabled="disabled"
    class="text-gray-100" @click="handleClick"> {{
      buttonStore.label
    }}</button>
</template>

<style scoped></style>
