<template>
  <div class="absolute bottom-44 right-5 z-40">
    <div
      class="bg-gradient-to-b from-blue-500 to-blue-400 text-white rounded-xl shadow-lg w-36 py-2"
    >
      <button
        class="w-full px-4 py-2 flex items-center gap-2 hover:bg-blue-600"
        @click="$emit('clickGroup')"
      >
        <Icon icon="mdi:account-group" class="w-5 h-5" />
        <span>단체 여행</span>
      </button>
      <div class="border-t border-white opacity-30 mx-2 my-1"></div>
      <button
        class="w-full px-4 py-2 flex items-center gap-2 hover:bg-blue-600"
        @click="$emit('clickSolo')"
      >
        <Icon icon="mdi:account" class="w-5 h-5" />
        <span>개인 여행</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
