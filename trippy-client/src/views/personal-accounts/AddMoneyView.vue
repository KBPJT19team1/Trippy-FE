<script setup>
import { ref, computed } from "vue";

import AmountInputView from "@/views/AmountInputView.vue";
import PasswordInput from "@/components/common/inputs/PasswordInput.vue";
import ConfirmTransfer from "@/components/account/ConfirmTransfer.vue";
import CompleteTransfer from "@/components/account/CompleteTransfer.vue";

const views =  [AmountInputView, PasswordInput, ConfirmTransfer, CompleteTransfer];
const currentIndex = ref(2);

const currentView = computed(() => views[currentIndex.value]);

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
    />
  </main>
</template>
