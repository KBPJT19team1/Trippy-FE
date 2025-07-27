<script setup>
import { useRouter } from "vue-router";
import RoundedCard from "@/components/travel-logs/RoundedCard.vue";
import sampleImage from "@/assets/image.png";
import emptyImage from "@/assets/travelLogEmpty.png";
import { Icon } from "@iconify/vue";
import { computed, ref } from "vue";

const router = useRouter();

const showOptions = ref(false);
const showGroupModal = ref(false); // 단체 여행 클릭 시 모달

function toggleOptions() {
  showOptions.value = !showOptions.value;
}

const travelLogs = [
  {
    id: 2,
    title: "제주도 여행",
    dateRange: "2025.07.14 ~ 2025.07.16",
    memberCount: 3,
    imageUrl: sampleImage,
    isReportGenerated: true,
  },
  {
    id: 1,
    title: "강릉 당일치기",
    dateRange: "2024.08.03",
    memberCount: 2,
    imageUrl: sampleImage,
    isReportGenerated: true,
  },
  {
    id: 3,
    title: "부산 여행",
    dateRange: "2025.09.10 ~ 2025.09.12",
    memberCount: 4,
    imageUrl: sampleImage,
    isReportGenerated: false,
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
function handleGroupClick() {
  showOptions.value = false;
  showGroupModal.value = true;
}
</script>

<template>
  <main class="relative w-full flex flex-col gap-8">
    <!-- 배경 오버레이 -->
    <div
      v-if="showOptions"
      class="fixed inset-0 bg-black bg-opacity-40 z-20"
      @click="showOptions = false"
    ></div>
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
          :memberCount="log.memberCount"
          :isReportGenerated="Boolean(log.isReportGenerated)"
          :onClick="() => handleClick(log.id)"
        />
      </div>
    </div>

    <button
      class="absolute bottom-24 right-5 z-30 bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg text-3xl flex items-center justify-center"
      @click="toggleOptions"
    >
      <Icon icon="material-symbols:add-2-rounded" class="w-8 h-8" />
    </button>
    <!-- 옵션 버튼들 -->
    <div v-if="showOptions" class="absolute bottom-40 right-5 z-40">
      <div
        class="bg-gradient-to-b from-blue-500 to-blue-400 text-white rounded-xl shadow-lg w-36 py-2"
      >
        <!-- 수정된 버튼 -->
        <button
          class="w-full px-4 py-2 flex items-center gap-2 hover:bg-blue-600"
          @click="handleGroupClick"
        >
          <Icon icon="mdi:account-group" class="w-5 h-5" />
          <span>단체 여행</span>
        </button>
        <div class="border-t border-white opacity-30 mx-2 my-1"></div>
        <button
          class="w-full px-4 py-2 flex items-center gap-2 hover:bg-blue-600"
          @click="router.push('/new-log')"
        >
          <Icon icon="mdi:account" class="w-5 h-5" />
          <span>개인 여행</span>
        </button>
      </div>
    </div>
    <!-- 단체 여행 모달 -->
    <div
      v-if="showGroupModal"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    >
      <div class="bg-white w-80 rounded-xl p-6 shadow-lg text-center">
        <h2 class="text-lg font-semibold text-black mb-2">모임 계좌를 만들기 전이에요</h2>
        <p class="text-sm text-gray-600 mb-6">
          단체 여행 로그를 기록하려면<br />
          Trippy의 모임 계좌가 필요해요
        </p>
        <div class="flex justify-between gap-4">
          <button
            class="flex-1 py-2 bg-gray-200 rounded-lg text-gray-800 font-semibold hover:bg-gray-300"
            @click="showGroupModal = false"
          >
            취소
          </button>
          <button
            class="flex-1 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
            @click="router.push('/group-account/create')"
          >
            만들러 가기
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
