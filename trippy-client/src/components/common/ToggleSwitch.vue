<script setup>
import { ref } from 'vue'

const isClicked = ref(false)
const toggle = () => {
  isClicked.value = !isClicked.value
}
</script>

<template>
  <div class="flex items-center">
    <button
      @click="toggle"
      :class="[
        'relative inline-flex h-6 w-14 items-center rounded-full transition-colors duration-300',
        isClicked ? 'bg-blue-400' : 'bg-gray-300'
      ]"
    >
      <span
        :class="[
          'inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300',
          isClicked ? 'translate-x-9' : 'translate-x-1'
        ]"
      />
    </button>
  </div>
</template>
