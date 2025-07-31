<script setup>
import { Icon } from "@iconify/vue";
import { banks } from "@/_dummy/banks_dummy.js";
</script>

<template>
  <div class="w-full">
    <div
      class="h-12 border-b border-gray-400 flex justify-between items-center text-gray-400"
    >
      <span class="title4">은행 선택</span>
      <Icon icon="material-symbols:arrow-forward-ios-rounded" class="size-5 rotate-90" />
    </div>

    <ul class="bg-blue-100 rounded-b-xl">
      <li
        v-for="(item, index) in banks"
        class="flex h-12 items-center border-t border-gray-200 gap-2 px-4 active:bg-gray-200"
      >
        <img :src="item.logo" class="size-5" />
        <span class="body2">{{ item.bank }}</span>
      </li>
    </ul>
  </div>
</template>
