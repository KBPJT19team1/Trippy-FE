<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

const router = useRouter();
const formattedDate = "2025.07.23(수) ~ 2025.07.30(수)"; // 예시
</script>

<!-- NewLog.vue -->
<template>
  <div class="min-h-screen bg-white">
    <!-- 상단 헤더 -->
    <div class="relative">
      <img src="@/assets/image.png" class="w-full h-48 object-cover" alt="배경" />
      <button class="absolute top-4 left-4 text-black text-2xl" @click="router.back()">✕</button>
      <h1 class="absolute top-4 left-1/2 transform -translate-x-1/2 text-black font-bold text-lg">
        새 여행 로그
      </h1>
      <div
        class="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-1 flex items-center gap-2 shadow"
      >
        <Icon icon="mdi:camera-outline" class="text-gray-500" />
        <span class="text-gray-700 text-sm">0/1</span>
      </div>
    </div>

    <!-- 폼 영역 -->
    <form class="px-4 py-6 space-y-4">
      <input type="text" placeholder="제목을 입력하여 주세요." class="input" />

      <div class="relative">
        <input type="text" readonly :value="formattedDate" class="input" />
        <Icon
          icon="mdi:calendar"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>

      <input type="text" placeholder="여행지를 입력해주세요." class="input" />

      <select class="input text-gray-500">
        <option disabled selected>계좌를 선택해주세요.</option>
        <option>하나은행 123-456</option>
      </select>

      <button
        type="submit"
        class="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold"
      >
        로그 생성하기
      </button>
    </form>
  </div>
</template>

<style scoped>
.input {
  @apply w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400;
}
</style>
