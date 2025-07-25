<script setup>
import { useRouter } from "vue-router";
import RoundedCard from "@/components/common/RoundedCard.vue";
import sampleImage from "@/assets/image.png";
import emptyImage from "@/assets/travelLogEmpty.png";
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const router = useRouter();

const travelLogs = [
  {
    id: 2,
    title: "제주도 여행",
    dateRange: "2025.07.14 ~ 2025.07.16",
    description: "리포트 발급 전! 우리 어떻게 해볼까요?",
    memberCount: 3,
    imageUrl: sampleImage,
  },
  {
    id: 1,
    title: "강릉 당일치기",
    dateRange: "2024.08.03",
    description: "맛집 탐방과 해변 산책",
    memberCount: 2,
    imageUrl: sampleImage,
  },
  {
    id: 3,
    title: "부산 여행",
    dateRange: "2025.09.10 ~ 2025.09.12",
    description: "야경, 해운대, 그리고 밀면",
    memberCount: 4,
    imageUrl: sampleImage,
  },
];

// 연도별로 그룹화된 데이터 생성
const groupedLogs = computed(() => {
  const groups = {};
  travelLogs.forEach((log) => {
    const year = log.dateRange.split(".")[0]; // "2025"
    if (!groups[year]) groups[year] = [];
    groups[year].push(log);
  });

  // 연도 역순 정렬 (최신이 위로)
  return Object.entries(groups)
    .sort((a, b) => b[0] - a[0])
    .map(([year, logs]) => ({ year, logs }));
});

function handleClick(id) {
  router.push("/map");
}
function handleAddLog() {
  router.push("/new-log"); // 실제 경로에 맞게 수정하세요
}
</script>

<template>
  <main class="w-full flex flex-col gap-8">
    <div
      v-if="travelLogs.length === 0"
      class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
    >
      <img :src="emptyImage" alt="빈 상태 이미지" class="w-40 mb-4 opacity-80" />
      <p class="text-black text-xl font-semibold">첫 여행을 기록해보세요!</p>
    </div>

    <!-- 연도별 그룹 렌더링 -->
    <div v-for="(group, index) in groupedLogs" :key="group.year" class="px-4">
      <div class="flex justify-between items-center mb-2">
        <p class="text-lg font-semibold text-black">{{ group.year }}</p>

        <!-- 정렬 아이콘: 첫 번째 그룹일 때만 보여줌 -->
        <a v-if="index === 0" href="#" class="flex items-center text-gray-600">
          <Icon icon="material-symbols:sort-rounded" class="w-5 h-5" />
          <span class="ml-1 text-sm">최신순</span>
        </a>
      </div>

      <div class="flex flex-col gap-4">
        <RoundedCard
          v-for="log in group.logs"
          :key="log.id"
          :imageUrl="log.imageUrl"
          :title="log.title"
          :dateRange="log.dateRange"
          :description="log.description"
          :memberCount="log.memberCount"
          :onClick="() => handleClick(log.id)"
        />
      </div>
    </div>

    <button
      class="absolute bottom-24 right-5 z-30 bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg text-3xl flex items-center justify-center"
      @click="handleAddLog"
    >
      <Icon icon="material-symbols:add-2-rounded" class="w-8 h-8" />
    </button>
  </main>
</template>
