<script setup>
import QuickReloadButton from "@/components/common/QuickReloadButton.vue";

const onReload = () => {
  console.log(" Reload 버튼 클릭 ");
};
</script>

<template>
  <main class="w-full flex flex-col gap-8">
    <div class="relative min-h-screen">
      <QuickReloadButton @reload="onReload" />
    </div>
  </main>
</template>
