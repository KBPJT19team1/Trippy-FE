<script setup>
import XButton from "@/assets/svg/x_button.svg"; // SVG를 컴포넌트로 import

const props = defineProps({
  card: Object,
});

const emit = defineEmits(["close"]);

const handleClose = () => {
  emit("close");
};
</script>

<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-end z-50"
    @click.self="handleClose"
  >
    <div class="bg-white w-full rounded-t-xl p-6 max-w-[375px]">
      <div class="flex justify-between items-center mb-4">
        <div class="title4">{{ card.name }}</div>

        <!-- SVG 컴포넌트 사용 -->
        <button @click="handleClose" aria-label="닫기 버튼">
          <XButton class="w-6 h-6" />
        </button>
      </div>

      <div class="text-sm text-gray-500 mb-4">{{ card.number }}</div>

      <ul class="space-y-4">
        <li class="text-base">별명설정</li>
        <li class="text-base">주카드 설정</li>
        <li class="text-base text-red-500">카드삭제</li>
      </ul>
    </div>
  </div>
</template>
