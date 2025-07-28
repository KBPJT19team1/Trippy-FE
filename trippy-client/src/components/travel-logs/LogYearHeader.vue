<template>
  <div class="flex justify-between items-center mb-2">
    <p class="text-lg font-semibold text-black">{{ year }}</p>
    <a v-if="showSort" href="#" class="flex items-center text-gray-600">
      <Icon icon="material-symbols:sort-rounded" class="w-5 h-5" />
      <span class="ml-1 text-sm">최신순</span>
    </a>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  year: String,
  showSort: Boolean,
});
</script>
