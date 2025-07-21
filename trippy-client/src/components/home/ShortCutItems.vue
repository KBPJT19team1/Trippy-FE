<script setup>
import { Icon } from '@iconify/vue'

const shortcutItems = [
  {
    icon: 'material-symbols:currency-exchange-rounded',
    title: '환전하기'
  },
  {
    icon: 'material-symbols:id-card-rounded',
    title: '신분증/여권\n확인하기'
  },
  {
    icon: 'material-symbols:airplane-ticket',
    title: '항공권/바우처\n확인하기'
  },
  {
    icon: 'material-symbols:g-translate',
    title: '번역하기'
  },
]
</script>

<template>
  <div
    v-for='(item, index) in shortcutItems'
    :key='index'
    class='w-full h-24 bg-white rounded-xl flex flex-col items-center justify-center gap-1'
  >
    <Icon :icon='item.icon' class='w-8 h-8 text-blue-300 hover:text-blue-400' />
    <p class='caption3 text-gray-600 text-center whitespace-pre-line'>{{ item.title }}</p>
  </div>
</template>
