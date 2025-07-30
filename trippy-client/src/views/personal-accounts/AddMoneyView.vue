<script setup>
import { ref, computed } from "vue";

import AmountInputView from "@/views/AmountInputView.vue";
import PasswordInput from "@/components/common/inputs/PasswordInput.vue";
import ConfirmTransfer from "@/components/account/ConfirmTransfer.vue";

const views =  [AmountInputView, PasswordInput, ConfirmTransfer];
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
