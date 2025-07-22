<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="flex flex-col gap-1">
    <p class="body1 text-gray-400">주민등록번호</p>
    <div class="flex items-center gap-2">
      <input
        type="text"
        placeholder="예) 010345"
        maxlength="6"
        class="w-full h-12 border-[1px] border-gray-300 rounded-xl px-4 text-gray-400"
        @input="$event.target.value = $event.target.value.replace(/[^0-9]/g, '')"
      >
      <span>-</span>
      <input
        type="text"
        placeholder="*"
        maxlength="1"
        class="w-12 h-12 border-[1px] border-gray-300 rounded-xl px-4 text-gray-400"
        @input="$event.target.value = $event.target.value.replace(/[^0-9]/g, '')"
      >
      <div class="flex gap-1">
        <Icon
          v-for="n in 6"
          icon='material-symbols:circle'
          class='w-3 h-3'
        />
      </div>
    </div>
  </div>
</template>
