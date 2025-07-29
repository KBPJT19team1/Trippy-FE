<!-- trippy-client/src/views/payment/PasswordView.vue -->
<script setup>
import { useRouter } from "vue-router";
import PasswordInput from "@/components/common/inputs/PasswordInput.vue";

const router = useRouter();

// PasswordInput에서 emit된 'next' 이벤트를 받아 처리
const handleNext = () => {
  // 다음 페이지로 이동 (예: /payment/complete 또는 원하는 경로)
  router.push("/payment/complete");
};
</script>

<template>
  <PasswordInput @next="handleNext" />
</template>
