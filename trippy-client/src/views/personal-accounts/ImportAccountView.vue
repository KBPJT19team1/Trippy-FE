<script setup>
import { ref, computed } from "vue";

import FirstStep from "@/components/personal-accounts/import-accounts/FirstStep.vue";
import SecondStep from "@/components/personal-accounts/import-accounts/SecondStep.vue";
import ThirdStep from "@/components/personal-accounts/import-accounts/ThirdStep.vue";
import FourthStep from "@/components/personal-accounts/import-accounts/AgreeToTerms.vue";
import PasswordInput from "@/components/common/inputs/PasswordInput.vue";
import ChooseAccounts from "@/components/personal-accounts/import-accounts/SelectAccounts.vue";

const views = [FirstStep, SecondStep, ThirdStep, FourthStep, PasswordInput, ChooseAccounts];
const currentIndex = ref(5);

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
