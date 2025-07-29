<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import NextButton from "@/components/common/NextButton.vue";

const router = useRouter();
const reservationName = ref("");
const selectedDate = ref("");
const selectedFile = ref(null);
const fileUrl = ref(null);

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    selectedFile.value = file;
    fileUrl.value = URL.createObjectURL(file);
  }
};

const isDisabled = computed(() => {
  return !reservationName.value || !selectedDate.value || !selectedFile.value;
});

const handleSubmit = () => {
  router.back(); //옮겨야함~
};
</script>

<template>
  <main class="w-full flex flex-col gap-8 relative">
    <!-- 예약 등록 폼 -->
    <div class="flex flex-col gap-2">
      <p class="body2 text-black px-1">예약 이름</p>
      <input
        v-model="reservationName"
        type="text"
        placeholder="예약 이름을 입력해주세요"
        class="w-full h-12 border-[1px] border-gray-300 rounded-xl px-4"
      />

      <p class="body2 text-black mt-4 px-1">예약 날짜</p>
      <input
        v-model="selectedDate"
        type="date"
        class="body2 text-gray-400 w-full h-12 border-[1px] border-gray-300 rounded-xl px-4"
      />

      <!-- 바우처 등록 -->
      <p class="body2 text-black mt-4 px-1">바우처 등록</p>
      <div
        class="w-full h-12 border border-blue-500 rounded-xl px-4 flex items-center justify-between"
      >
        <label for="voucherFile" class="text-blue-500 cursor-pointer truncate">
          {{ selectedFile?.name || "파일을 선택해주세요." }}
        </label>
        <input
          id="voucherFile"
          type="file"
          accept="image/*,.pdf"
          class="hidden"
          @change="onFileChange"
        />
        <Icon
          :icon="selectedFile ? 'material-symbols:check-rounded' : 'material-symbols:add-2-rounded'"
          class="text-blue-500 w-5 h-5"
        />
      </div>
      <p class="caption1 text-gray-400 px-1">
        *.pdf, .jpg, .jpeg, .png 형식의 파일만 등록할 수 있습니다.
      </p>

      <!-- 파일 미리보기 -->
      <div v-if="fileUrl" class="mt-4 w-full rounded-xl overflow-hidden border border-gray-200">
        <img
          v-if="selectedFile?.type.startsWith('image/')"
          :src="fileUrl"
          alt="바우처 미리보기"
          class="w-full object-contain max-h-[400px]"
        />
        <embed
          v-else-if="selectedFile?.type === 'application/pdf'"
          :src="fileUrl"
          type="application/pdf"
          class="w-full h-[400px]"
        />
      </div>

      <!-- 위치 지정잘하기 -->
      <div class="fixed bottom-4 left-0 w-full px-4 pb-4">
        <NextButton title="등록하기" :disabled="isDisabled" @click="handleSubmit" />
      </div>
    </div>
  </main>
</template>
