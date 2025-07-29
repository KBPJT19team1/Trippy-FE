<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import PhotoUploader from "@/components/travel-logs/PhotoUploader.vue";
import DateRangePicker from "@/components/travel-logs/DateRangePicker.vue";

// 이미지 import
import defaultImage from "@/assets/image.png";

const showCalendar = ref(false);
const selectedRange = ref({ start: "", end: "" });

const router = useRouter();

const imageFile = ref(null);
const imageUrl = ref("");

const formattedDate = computed(() =>
  selectedRange.value.start && selectedRange.value.end
    ? `${selectedRange.value.start} ~ ${selectedRange.value.end}`
    : "날짜를 선택하세요",
);
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- 상단 헤더 -->
    <div class="relative">
      <div class="relative w-full">
        <img
          :src="imageUrl || defaultImage"
          alt="여행 이미지"
          class="w-full h-auto object-cover opacity-60"
        />
      </div>
      <button class="absolute top-4 left-4 text-black text-2xl" @click="router.back()">✕</button>
      <h1 class="absolute top-4 left-1/2 transform -translate-x-1/2 text-black font-bold text-lg">
        새 여행 로그
      </h1>
      <PhotoUploader @update:imageUrl="imageUrl = $event" @update:imageFile="imageFile = $event" />
    </div>

    <!-- 폼 영역 -->
    <form class="px-4 py-6 space-y-4">
      <input type="text" placeholder="제목을 입력하여 주세요." class="input" />
      <DateRangePicker
        @update:range="
          (val) => {
            selectedRange.value = val;
            showCalendar.value = false;
          }
        "
      />

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
