<script setup>
const props = defineProps({
  name: { type: String, required: true }, // 이름
  maskedId: { type: String, default: "" }, // 마스킹된 주민등록번호
  idNumber: { type: String, default: "" }, // 원래 주민등록번호
  address: { type: String, default: "" }, // 주소
  showDetail: { type: Boolean, default: false }, // 상세보기 여부
});
</script>

<template>
  <div class="flex flex-col">
    <!-- 안내 문구 -->
    <p class="text-gray-500 caption4">모바일 신분증 확인 서비스</p>

    <!-- 이름 -->
    <h2 class="mt-1 title1">{{ name }}</h2>

    <!-- 상세 정보 (showDetail이 true일 때만 표시) -->
    <div v-if="showDetail">
      <!-- 주민등록번호 -->
      <div class="mt-1">
        <p class="title2">{{ maskedId || idNumber }}</p>
      </div>
      <!-- 주소 -->
      <div class="mt-9">
        <p v-if="address" class="body2">{{ address }}</p>
      </div>
    </div>
  </div>
</template>
