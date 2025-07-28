<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import { useAccommodationStore } from "@/stores/accommodationStore";
import dummyAccommodations from "@/_dummy/accommodation_dummy.json";
import LoadingOverlay from "@/components/common/LoadingOverlay.vue";
import QuickReloadButton from "@/components/common/QuickReloadButton.vue";
import EmptyAccommodation from "@/components/boucher/EmptyAccommodation.vue";
import AccommodationItem from "@/components/boucher/AccommodationItem.vue";

const route = useRoute();
const isLoading = ref(false);
const currentTab = ref(route.meta.tabs?.[0] ?? "숙소"); //숙소인지 관광인지 데이터 분리해서 조회하기

//숙소 store
const accommodationStore = useAccommodationStore();
const { accommodations } = storeToRefs(accommodationStore);

//초기 세팅
onMounted(() => {
  accommodationStore.setAccommodations(dummyAccommodations);
});

//숙소뷰에만 해당 데이터 보이도록
const visibleAccommodations = computed(() => {
  return currentTab.value === "숙소" ? accommodations.value : [];
});

const onReload = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>

<template>
  <main class="w-full flex flex-col gap-8 relative">
    <!-- 로딩 블러 오버레이 -->
    <LoadingOverlay v-if="isLoading" message="예약한 숙소내역을 불러오고 있습니다." />

    <!-- 항공권 없을 때 -->
    <div v-if="accommodations.length === 0" class="mt-[50%] flex justify-center">
      <EmptyAccommodation />
    </div>

    <!-- 항공권 있을 때 -->
    <div v-else class="flex flex-col gap-4">
      <AccommodationItem v-for="item in visibleAccommodations" :key="item.id" :data="item" />
    </div>

    <!-- 하단 퀵 버튼-->
    <div class="fixed bottom-7 ml-48 z-50">
      <QuickReloadButton @reload="onReload" />
    </div>
  </main>
</template>
