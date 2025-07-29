<script setup>
import { Icon } from "@iconify/vue";
import dummyVoucher from "@/assets/dummy_voucher.png";

defineProps({ imageUrl: String });
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
    <img :src="dummyVoucher" class="max-w-full max-h-full object-contain" />

    <button class="absolute top-4 right-4 text-white text-3xl" @click="emit('close')">
      <Icon icon="material-symbols:close-rounded" class="w-5 h-5" />
    </button>
  </div>
</template>
