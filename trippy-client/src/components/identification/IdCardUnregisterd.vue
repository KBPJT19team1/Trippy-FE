<script setup>
defineProps({
  image: { type: String, required: true },
  docType: { type: String, default: "" },
  buttonText: { type: String, default: "" },
});
</script>

<template>
  <div class="w-full h-[32rem] rounded-xl shadow-md bg-white flex flex-col">
    <!-- 임시 이미지 -->
    <div class="flex-1 flex flex-col items-center justify-center">
      <img :src="image" class="w-[15rem] h-auto mb-2" />
      <p class="text-center text-gray-700 body1">
        모바일 {{ docType }} 확인 서비스를<br />
        등록하시겠습니까?
      </p>
    </div>
    <!-- 등록 버튼 -->
    <button
      class="card-footer-button w-full py-3 rounded-b-lg shadow-md text-white bg-main-gradient button1 text-center mt-auto"
      @click="$emit('registerClick')"
    >
      {{ buttonText || `${docType} 등록` }}
    </button>
  </div>
</template>
