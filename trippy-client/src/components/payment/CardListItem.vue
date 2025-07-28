<script setup>
import { ref } from "vue";
import CardOptionsModal from "./CardOptionsModal.vue";
import SetMainCardModal from "./SetMainCardModal.vue";
import DeleteCardModal from "./DeleteCardModal.vue";
import DetailIcon from "@/assets/svg/detail.svg";

const props = defineProps({
  card: Object,
});

const isOptionsOpen = ref(false);
const isSetMainOpen = ref(false);
const isDeleteOpen = ref(false);

// 옵션 모달 열기
const openOptions = () => {
  isOptionsOpen.value = true;
};

// 옵션 모달 닫기
const closeOptions = () => {
  isOptionsOpen.value = false;
};

// 주카드 모달 열기
const openSetMain = () => {
  isOptionsOpen.value = false;
  isSetMainOpen.value = true;
};

// 카드 삭제 모달 열기
const openDelete = () => {
  isOptionsOpen.value = false;
  isDeleteOpen.value = true;
};
</script>

<template>
  <div class="w-[343px] relative">
    <div class="flex items-center justify-between h-[80px] border-b border-[#F4F5F7] bg-white">
      <div
        class="flex items-center justify-center rounded-[10px] mr-4 overflow-hidden"
        :style="{ background: card.bgColor, width: '92px', height: '48px' }"
      >
        <component :is="card.logo" class="max-w-[60%] max-h-[60%]" />
      </div>
      <div class="flex-1">
        <div class="caption1">{{ card.name }}</div>
        <div class="caption1">{{ card.number }}</div>
      </div>
      <button class="p-1 ml-2" @click="openOptions" aria-label="카드 옵션">
        <DetailIcon class="w-5 h-5 text-gray-500" />
      </button>
    </div>

    <!-- 옵션 모달 -->
    <CardOptionsModal
      v-if="isOptionsOpen"
      :card="card"
      @close="closeOptions"
      @set-main="openSetMain"
      @delete-card="openDelete"
    />

    <!-- 주카드 모달 -->
    <SetMainCardModal v-if="isSetMainOpen" :card="card" @close="isSetMainOpen = false" />

    <!-- 삭제 모달 -->
    <DeleteCardModal v-if="isDeleteOpen" :card="card" @close="isDeleteOpen = false" />
  </div>
</template>
