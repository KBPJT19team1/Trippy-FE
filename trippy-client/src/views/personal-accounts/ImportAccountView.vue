<script setup>
import { ref, computed } from "vue";

import FirstStep from "@/components/personal-accounts/import-accounts/FirstStep.vue";
import SecondStep from "@/components/personal-accounts/import-accounts/SecondStep.vue";
import ThirdStep from "@/components/personal-accounts/import-accounts/ThirdStep.vue";
import FourthStep from "@/components/personal-accounts/import-accounts/AgreeToTerms.vue";

const views = [FirstStep, SecondStep, ThirdStep, FourthStep];
const currentIndex = ref(3);

const currentView = computed(() => views[currentIndex.value]);

function goNext() {
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
