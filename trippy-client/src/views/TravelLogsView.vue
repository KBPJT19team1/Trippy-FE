<script setup>
import { useRouter } from "vue-router";
import RoundedCard from "@/components/common/RoundedCard.vue";
import sampleImage from "@/assets/image.png";

const router = useRouter();

const travelLogs = [
  {
    id: 1,
    title: "제주도 여행",
    dateRange: "2025.07.14 ~ 2025.07.16",
    description: "리포트 발급 전! 우리 어떻게 해볼까요?",
    memberCount: 3,
    imageUrl: sampleImage,
  },
  {
    id: 2,
    title: "강릉 당일치기",
    dateRange: "2025.08.03",
    description: "맛집 탐방과 해변 산책",
    memberCount: 2,
    imageUrl: "https://via.placeholder.com/400x150?text=Gangneung",
  },
  {
    id: 3,
    title: "부산 여행",
    dateRange: "2025.09.10 ~ 2025.09.12",
    description: "야경, 해운대, 그리고 밀면",
    memberCount: 4,
    imageUrl: "https://via.placeholder.com/400x150?text=Busan",
  },
];

function handleClick(id) {
  router.push("/map");
}
</script>

<template>
  <main class="pt-2 pb-4 px-2 h-[calc(100vh-190px)] space-y-4 overflow-y-scroll hide-scrollbar">
    <RoundedCard
      v-for="log in travelLogs"
      :key="log.id"
      :imageUrl="log.imageUrl"
      :title="log.title"
      :dateRange="log.dateRange"
      :description="log.description"
      :memberCount="log.memberCount"
      :onClick="() => handleClick(log.id)"
    />
  </main>
</template>
