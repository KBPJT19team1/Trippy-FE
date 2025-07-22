<script setup>
import { useRouter } from "vue-router"; // ✅ 1. 라우터 사용
import RoundedCard from "@/components/common/RoundedCard.vue";
import sampleImage from "@/assets/image.png";

const router = useRouter(); // ✅ 2. 라우터 인스턴스 생성

function handleClick() {
  router.push("/map"); // ✅ 3. 클릭 시 '/map' 경로로 이동
}
</script>

<template>
  <main class="p-4 flex justify-center">
    <RoundedCard
      :imageUrl="sampleImage"
      title="제주도야 기다려라"
      dateRange="25.07.14 ~ 25.07.16"
      description="리포트 발급 전! 우리 어떻게 해볼까요?"
      :memberCount="3"
      :onClick="handleClick"
    />
  </main>
</template>
