<script setup>
import { ref, computed } from "vue";

import FirstStep from "@/components/personal-accounts/import-accounts/FirstStep.vue";
import SecondStep from "@/components/personal-accounts/import-accounts/SecondStep.vue";
import ThirdStep from "@/components/personal-accounts/import-accounts/ThirdStep.vue";
import FourthStep from "@/components/personal-accounts/import-accounts/AgreeToTerms.vue";
import PasswordInput from "@/components/common/inputs/PasswordInput.vue";
import LoadingView from "@/components/common/loading/LoadingView.vue";

const views = [FirstStep, SecondStep, ThirdStep, FourthStep, PasswordInput, LoadingView];
const currentIndex = ref(4);

const currentView = computed(() => views[currentIndex.value]);

const loadingDescription = "계좌 목록을 불러오고 있습니다.";

function goNext() {
  if (currentIndex.value < views.length - 1) {
    currentIndex.value++;
  }
}
</script>

<template>
  <main class="w-full bg-white h-full">
    <component
      :is="currentView"
      @next="goNext"
      v-bind="currentView === LoadingView ? { description: loadingDescription } : {}"
    />
  </main>
</template>
