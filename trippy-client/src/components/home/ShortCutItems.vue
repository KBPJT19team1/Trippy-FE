<script setup>
import { Icon } from "@iconify/vue";

const shortcutItems = [
  {
    icon: "material-symbols:currency-exchange-rounded",
    title: "환전하기",
    to: "/exchange",
  },
  {
    icon: "material-symbols:id-card-rounded",
    title: "신분증/여권\n확인하기",
    to: "/id-cards",
  },
  {
    icon: "material-symbols:airplane-ticket",
<<<<<<< HEAD
    title: "항공권/바우처\n확인하기",
    to: "/tickets",
  },
  {
    icon: "material-symbols:g-translate",
    title: "번역하기",
    to: "/translation",
  },
=======
    title: "항공권\n확인하기",
    to: "/tickets",
  },
  {
    icon: "heroicons:ticket-solid",
    title: "바우처\n확인하기",
    to: "/bouchers",
  },
  {
    icon: "material-symbols:g-translate",
    title: "번역하기",
    to: "/translation",
  },
>>>>>>> 66b46a9346492fd76e6b932b2ab9740d04321630
];
</script>

<template>
  <div v-for="(item, index) in shortcutItems" :key="index" class="w-full">
    <RouterLink :to="item.to">
      <div
        class="w-full h-24 bg-white rounded-xl flex flex-col items-center justify-center gap-1 hover:opacity-75"
      >
        <Icon :icon="item.icon" class="w-8 h-8 text-blue-300" />
        <p class="caption3 text-gray-600 text-center whitespace-pre-line">{{ item.title }}</p>
      </div>
    </RouterLink>
  </div>
</template>
