<script setup>
import ToggleSwitch from '@/components/common/ToggleSwitch.vue';
import AccountCard from '@/components/home/AccountCard.vue';
import ShortcutItems from '@/components/home/ShortCutItems.vue';
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
    <div class='flex flex-col gap-1'>
      <h2 class='subtitle2'>서비스 바로가기</h2>
      <div class='flex gap-2'>
        <ShortcutItems />
      </div>
    </div>
  </main>
</template>
