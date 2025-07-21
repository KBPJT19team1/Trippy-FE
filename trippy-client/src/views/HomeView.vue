<script setup>
import { Icon } from '@iconify/vue'
import ToggleSwitch from '@/components/common/ToggleSwitch.vue';
import AccountCard from '@/components/home/AccountCard.vue';
</script>

<template>
  <main class='w-full flex flex-col gap-8'>
    <div class='flex flex-col gap-4'>
      <div class="flex items-center gap-1">
        <ToggleSwitch />
        <span class='caption2 text-gray-400'>모임통장 보기</span>
      </div>
      <AccountCard />
    </div>
  </main>
</template>
