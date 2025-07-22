<script setup>
import { Icon } from '@iconify/vue'
import ToggleSwitch from '@/components/common/ToggleSwitch.vue';
import AccountCard from '@/components/home/AccountCard.vue';
import ShortcutItems from '@/components/home/ShortCutItems.vue';
import ExchangeRateItems from '@/components/home/ExchangeRateItems.vue';
</script>

<template>
  <main class='w-full flex flex-col gap-8'>
    <div class='flex flex-col gap-4'>
      <ToggleSwitch />
      <AccountCard />
    </div>

    <div class='flex flex-col gap-1'>
      <h2 class='subtitle2'>서비스 바로가기</h2>
      <div class='flex gap-2'>
        <ShortcutItems />
      </div>
    </div>

    <div class='flex flex-col gap-1'>
      <div class='flex justify-between items-center'>
        <h2 class='subtitle2'>환율 정보</h2>
        <div class='text-gray-400 flex items-center gap-1 hover:text-gray-600'>
          <span class='caption2'>환율 조회</span>
          <Icon icon='material-symbols:arrow-back-ios-rounded' class='w-3 h-3 rotate-180'/>
        </div>
      </div>
      <div class='flex gap-2'>
        <ExchangeRateItems />
      </div>
    </div>

  </main>
</template>
