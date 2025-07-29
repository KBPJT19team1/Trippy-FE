<script setup>
import QRImage from "@/assets/before-pay.png";
</script>

<template>
  <RouterLink to="/payment/password">
    <div class="w-[83px] h-[85px] cursor-pointer">
      <img :src="QRImage" alt="QR 코드" class="w-full h-full object-contain" />
    </div>
  </RouterLink>
</template>
