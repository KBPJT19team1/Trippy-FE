<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import { useAccommodationStore } from "@/stores/accommodationStore";
import { useSightseeingStore } from "@/stores/sightseeingStore";

import dummyAccommodations from "@/_dummy/accommodation_dummy.json";
import dummySightseeing from "@/_dummy/sightseeing_dummy.json";

import LoadingOverlay from "@/components/common/loading/LoadingOverlay.vue";
import QuickReloadButton from "@/components/common/QuickReloadButton.vue";
import EmptyAccommodation from "@/components/boucher/EmptyAccommodation.vue";
import EmptySightseeing from "@/components/boucher/EmptySightseeing.vue";
import AccommodationItem from "@/components/boucher/AccommodationItem.vue";
import SightseeingItem from "@/components/boucher/SightseeingItem.vue";

const props = defineProps({
  currentTab: {
    type: String,
    required: true,
  },
});

const route = useRoute();
const isLoading = ref(false);

//숙소 store
const accommodationStore = useAccommodationStore();
const { accommodations } = storeToRefs(accommodationStore);

//관광 store
const sightseeingStore = useSightseeingStore();
const { sightseeings } = storeToRefs(sightseeingStore);

// 탭 전환 시 더미 데이터 로드
watch(
  () => props.currentTab,
  (tab) => {
    if (tab === "숙소") accommodationStore.setAccommodations(dummyAccommodations);
    else if (tab === "관광") sightseeingStore.setSightseeing(dummySightseeing);
  },
  { immediate: true },
);

// 보여줄 목록
const visibleList = computed(() => {
  return currentTab.value === "숙소" ? accommodations.value : sightseeings.value;
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
    <LoadingOverlay v-if="isLoading" message="예약한 숙소내역을 불러오고 있습니다." />

    <!-- 숙소 탭 -->
    <template v-if="props.currentTab === '숙소'">
      <div v-if="accommodations.length === 0" class="mt-[50%] flex justify-center">
        <EmptyAccommodation />
      </div>
      <div v-else class="flex flex-col gap-4">
        <AccommodationItem v-for="item in accommodations" :key="item.id" :data="item" />
      </div>

      <div class="fixed bottom-7 ml-48 z-50">
        <QuickReloadButton @reload="onReload" />
      </div>
    </template>

    <!-- 관광 탭 -->
    <template v-else>
      <div v-if="sightseeings.length === 0" class="mt-[50%] flex justify-center">
        <EmptySightseeing />
      </div>
      <div v-else class="flex flex-col gap-4">
        <SightseeingItem v-for="item in sightseeings" :key="item.id" :data="item" />
      </div>

      <!-- 💰 add 퀵버튼 컴포넌트 추가해야함~~!!!~!~!~!~!~!~!~!~!~~ -->
    </template>
  </main>
</template>
