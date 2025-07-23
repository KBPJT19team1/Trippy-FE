<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="w-full flex justify-center">
    <RouterLink to="/payment/password" class="w-full flex justify-center">
      <button
        class="bg-main-gradient hover:opacity-90 text-white py-2 px-10 rounded-full shadow flex items-center gap-2 button2"
      >
        <Icon icon="material-symbols:lock" class="w-5 h-5" />
        결제하기
      </button>
    </RouterLink>
  </div>
</template>
