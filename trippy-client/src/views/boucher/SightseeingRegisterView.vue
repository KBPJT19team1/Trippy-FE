<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import NextButton from "@/components/common/NextButton.vue";

const router = useRouter();
const reservationName = ref("");

const close = () => {
  router.back();
};
</script>

<template>
  <main class="w-full flex flex-col gap-8 relative">
    <!-- 예약 등록 폼 -->
    <div class="flex flex-col gap-4">
      <p class="body2 text-black">예약 이름</p>
      <input
        v-model="reservationName"
        type="text"
        placeholder="예약 이름을 입력해주세요"
        class="w-full h-12 border-[1px] border-gray-300 rounded-xl px-4"
      />

      <p class="body2 text-black">예약 날짜</p>
      <input
        type="date"
        class="body2 text-gray-400 w-full h-12 border-[1px] border-gray-300 rounded-xl px-4"
      />

      <p class="body2 text-black">바우처 등록</p>
      <div class="w-full h-12 border border-gray-300 rounded-xl px-4 flex items-center">
        <label for="voucherFile" class="text-blue-500 cursor-pointer">파일을 선택해주세요.</label>
        <input id="voucherFile" type="file" accept="image/*,.pdf" class="hidden" />
      </div>

      <p class="caption1 text-gray-400">
        *.pdf, .jpg, .jpeg, .png 형식의 파일만 등록할 수 있습니다.
      </p>

      <!-- 위치 지정잘하기 -->
      <NextButton title="등록하기" :disabled="false" @click="emit('next')" />
    </div>
  </main>
</template>
