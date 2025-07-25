<script setup>
import { ref } from "vue";
import CardOptionsModal from "./CardOptionsModal.vue"; // 모달 컴포넌트

const props = defineProps({
  card: Object,
});

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="relative">
    <div class="flex items-center h-[80px] border-b border-[#F4F5F7] bg-white px-4">
      <!-- 카드 로고 -->
      <div
        class="flex items-center justify-center rounded-[10px] mr-4 overflow-hidden"
        :style="{ background: card.bgColor, width: '92px', height: '48px' }"
      >
        <component :is="card.logo" class="max-w-[60%] max-h-[60%]" />
      </div>

      <!-- 카드 정보 -->
      <div class="flex-1">
        <div class="caption1">{{ card.name }}</div>
        <div class="caption1">{{ card.number }}</div>
      </div>

      <!-- 점세개 아이콘 -->
      <button class="p-1" @click="openModal" aria-label="카드 옵션">
        <DetailIcon class="w-5 h-5 text-gray-500" />
      </button>
    </div>

    <!-- 모달 -->
    <CardOptionsModal v-if="isModalOpen" :card="card" @close="closeModal" />
  </div>
</template>
