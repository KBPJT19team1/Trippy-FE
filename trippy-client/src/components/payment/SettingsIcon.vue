<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue"; // Iconify 컴포넌트 불러오기
</script>

<template>
  <RouterLink to="/payment/settings">
    <div
      class="absolute left-[265px] top-[16px] w-[62px] h-[27px] flex items-center gap-[4px] cursor-pointer group text-gray-400 hover:text-gray-600 transition-colors duration-200"
    >
      <!-- Iconify 아이콘 사용 -->
      <Icon icon="material-symbols:settings-rounded" class="w-[24px] h-[24px]" />
      <span class="text-[18px] leading-[27px] font-medium"> 설정 </span>
    </div>
  </RouterLink>
</template>
