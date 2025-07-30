<script setup>
defineProps({ visible: Boolean });
import TrippyLogo from "@/assets/svg/trippy-logo.svg";
</script>

<template>
  <div
    v-if="visible"
    class="z-50 bg-gray-500 opacity-80 rounded-xl shadow flex items-center gap-2 px-4 py-3 text-black text-[12px]"
    style="position: absolute; width: 359px; height: 72px; left: 8px; top: 52px"
  >
    <!-- ✅ 이미지 대신 컴포넌트로 사용 -->
    <TrippyLogo class="w-8 h-8 rounded" style="background-color: white" />

    <div class="text-white flex flex-col">
      <span class="subtitle2">결제 완료</span>
      <span class="body2">2,200원</span>
    </div>

    <span class="ml-auto text-[10px] caption1 text-white">now</span>
  </div>
</template>
