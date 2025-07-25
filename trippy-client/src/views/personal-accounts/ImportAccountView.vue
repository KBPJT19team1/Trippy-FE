<script setup>
import { ref, computed } from "vue";

import FirstStep from "@/components/personal-accounts/import-accounts/FirstStep.vue";
import SecondStep from "@/components/personal-accounts/import-accounts/SecondStep.vue";
import ThirdStep from "@/components/personal-accounts/import-accounts/ThirdStep.vue";

const views = [FirstStep, SecondStep, ThirdStep];
const currentIndex = ref(1);

const currentView = computed(() => views[currentIndex.value]);

function goNext() {
  console.log("goNext");
  if (currentIndex.value < views.length - 1) {
    currentIndex.value++;
  }
}
</script>

<template>
  <main class="w-full bg-white h-full">
    <component :is="currentView" @next="goNext" />
  </main>
</template>
