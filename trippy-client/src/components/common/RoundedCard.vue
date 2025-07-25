<script setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

defineProps({
  imageUrl: String,
  title: String,
  dateRange: String,
  memberCount: Number,
  onClick: Function,
  isReportGenerated: Boolean,
});
</script>

<template>
  <div
    @click="onClick"
    class="w-full bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
  >
    <!-- 상단 이미지 -->
    <div class="relative w-full aspect-[3/1]">
      <img
        :src="imageUrl"
        alt="여행 이미지"
        class="absolute inset-0 w-full h-full object-cover opacity-60"
      />
    </div>

    <!-- 본문 -->
    <div class="p-4">
      <!-- 제목 & 날짜 -->
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-md font-bold text-gray-800 truncate">{{ title }}</h2>
        <p class="text-xs text-gray-400">{{ dateRange }}</p>
      </div>

      <!-- 리포트 링크 & 인원 수 -->
      <div class="flex justify-between items-center text-sm">
        <RouterLink
          to="/report"
          class="flex items-center gap-1 hover:underline truncate"
          :class="isReportGenerated ? 'text-blue-600' : 'text-gray-400'"
          @click.stop
        >
          {{ isReportGenerated ? "여행 리포트 발행 완료" : "여행 리포트 발행하기" }}
          <Icon icon="streamline:receipt-add" class="w-4 h-4" />
        </RouterLink>

        <span class="text-gray-500 flex items-center">👤 {{ memberCount }}</span>
      </div>
    </div>
  </div>
</template>
