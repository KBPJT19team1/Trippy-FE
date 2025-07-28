<script setup>
import SettingsIcon from "./SettingsIcon.vue";
import QrCode from "./QrCode.vue";
import PayButton from "./PayButton.vue";
import CardCarousel from "./CardCarousel.vue";
</script>

<template>
  <div
    class="absolute bg-white rounded-[20px] shadow-md"
    style="width: 343px; height: 520px; left: calc(50% - 343px / 2); top: 116px"
  >
    <div class="relative w-full h-full px-6 py-6">
      <SettingsIcon />

      <!-- QR 코드: 상단에서 71px 위치 -->
      <div class="absolute top-[71px] left-1/2 transform -translate-x-1/2">
        <QrCode />
      </div>

      <CardCarousel />

      <!-- 결제 버튼: 상단에서 500px 위치 -->
      <div class="absolute top-[500px] left-1/2 transform -translate-x-1/2">
        <PayButton />
      </div>
    </div>
  </div>
</template>
