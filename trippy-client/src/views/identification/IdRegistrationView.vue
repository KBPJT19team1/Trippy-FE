<script setup>
import Idcard from "@/assets/Idcard.png";
import { ref } from "vue";

const name = ref("홍길동");
const residentId = ref("010123-1234567");
const issueDate = ref("2019년 12월 13일");

// 각 필드 편집 모드 상태
const editingName = ref(false);
const editingResidentId = ref(false);
const editingIssueDate = ref(false);

const formatResidentId = () => {
  let digits = residentId.value.replace(/[^0-9]/g, ""); // 숫자만 추출
  if (digits.length > 6) {
    residentId.value = digits.slice(0, 6) + "-" + digits.slice(6, 13);
  } else {
    residentId.value = digits;
  }
};
</script>

<template>
  <div class="w-full h-[34rem] rounded-xl shadow-md bg-white flex flex-col">
    <!-- 민증 조회 뷰 -->
    <div class="flex flex-col items-center justify-center">
      <div>
        <img :src="Idcard" class="w-[19.5rem] h-auto mb-2 border-4 border-green rounded-lg p-1" />
        <!-- 다시 확인해주세요 글씨 -->
        <p class="text-gray-400 subtitle1 text-center">주민등록증 정보를 확인해주세요.</p>
      </div>
    </div>
    <!-- 입력부 -->
    <div class="mt-5">
      <div class="mb-3">
        <label class="body2"> 이름 </label>
        <div class="flex items-center justify-between border rounded-md px-3 py-2">
          <input class="text-gray-800" v-model="name" :readonly="!editingName" />
          <button class="text-gray-400 body2 font-medium body2" @click="editingName = !editingName">
            {{ editingName ? "완료" : "수정" }}
          </button>
        </div>
      </div>

      <div class="mb-3">
        <label class="body2"> 주민등록번호 </label>
        <div class="flex items-center border rounded-md px-3 py-2">
          <input
            class="text-gray-800 flex-1 text-left body2"
            v-model="residentId"
            maxlength="14"
            :readonly="!editingResidentId"
            @input="formatResidentId"
          />

          <button class="text-gray-400 body2" @click="editingResidentId = !editingResidentId">
            {{ editingResidentId ? "완료" : "수정" }}
          </button>
        </div>
      </div>

      <div>
        <label class="body2"> 발급일자 </label>
        <div class="flex items-center justify-between border rounded-md px-3 py-2">
          <input class="text-gray-800 body2" v-model="issueDate" :readonly="!editingIssueDate" />
          <button class="text-gray-400 body2" @click="editingIssueDate = !editingIssueDate">
            {{ editingIssueDate ? "완료" : "수정" }}
          </button>
        </div>
      </div>
    </div>

    <!-- TODO: 하단 바 없애고 위치 조정 -->
    <!-- 촬영 or 등록 버튼 -->
    <div class="flex gap-3 mt-4">
      <!-- 다시 촬영 버튼 -->
      <button
        class="flex-1 py-2 rounded-lg bg-blue-200 text-blue-600 button1 text-center shadow-sm hover:opacity-90"
      >
        다시 촬영
      </button>

      <!-- 등록하기 버튼 -->
      <button
        class="flex-1 py-3 rounded-lg bg-main-gradient text-white button1 text-center shadow-sm hover:opacity-90"
      >
        등록하기
      </button>
    </div>
  </div>
</template>
