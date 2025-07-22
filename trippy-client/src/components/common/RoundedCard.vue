<script setup>
defineProps({
  imageUrl: String,
  title: String,
  dateRange: String,
  description: String,
  memberCount: Number,
  onClick: Function,
});
</script>

<template>
  <div
    @click="onClick"
    class="w-full bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
  >
    <!-- 상단 이미지 -->
    <div class="h-24 w-full relative">
      <img :src="imageUrl" alt="여행 이미지" class="w-full h-full object-cover" />
    </div>

    <!-- 본문 -->
    <div class="p-4">
      <div class="flex justify-between items-center mb-1">
        <h2 class="text-md font-bold text-gray-800 truncate">{{ title }}</h2>
        <p class="text-xs text-gray-400">{{ dateRange }}</p>
      </div>
      <p class="text-sm text-gray-600 mb-3">{{ description }}</p>
      <div class="flex items-center text-sm text-gray-500">
        <span class="mr-1">👤</span>{{ memberCount }}
      </div>
    </div>
  </div>
</template>
