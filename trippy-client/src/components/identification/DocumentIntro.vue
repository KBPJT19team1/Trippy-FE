<!-- /components/identity/DocumentIntro.vue -->
<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  buttonText: { type: String, required: true },
});
</script>

<template>
  <div class="w-full h-[34rem] bg-white">
    <!-- 제목 & 설명 -->
    <div class="mt-5">
      <h1 class="title2">{{ title }}</h1>
      <p class="mt-4 body1" v-html="description"></p>
    </div>

    <!-- 문서 이미지 -->
    <div class="mt-20 flex-1 flex flex-col items-center justify-center">
      <img :src="image" class="w-[19.5rem] h-auto mb-2" />
    </div>

    <!-- 버튼 -->
    <button
      class="w-full py-3 rounded-lg bg-main-gradient items-center text-white button1 text-center shadow-sm"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
