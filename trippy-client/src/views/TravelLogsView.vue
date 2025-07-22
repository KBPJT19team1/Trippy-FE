<script setup>
import { useRouter } from "vue-router";
import RoundedCard from "@/components/common/RoundedCard.vue";
import sampleImage from "@/assets/image.png";

const router = useRouter();

function handleClick() {
  router.push("/map");
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
 