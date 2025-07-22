<template>
  <div class="w-full h-[34rem] rounded-xl shadow-md bg-white flex flex-col">
    <!-- 민증 조회 뷰 -->
    <div class="flex flex-col items-center justify-center">
      <div>
        <img :src="Idcard" class="w-[19.5rem] h-auto mb-2 border-2" />
        <!-- 다시 확인해주세요 글씨 -->
        <p class="text-gray-400 font-bold text-center">주민등록증 정보를 확인해주세요.</p>
      </div>
    </div>
    <!-- 입력부 -->
    <div class="mt-5">
      <div>
        <label> 이름 </label>
        <div class="flex items-center justify-between border rounded-md px-3 py-2">
          <input class="text-gray-800" placeholder="hi" />
          <button class="text-blue-500 text-sm font-medium">수정</button>
        </div>
      </div>

      <div>
        <label> 주민등록번호 </label>
        <div class="flex items-center justify-between border rounded-md px-3 py-2">
          <input class="text-gray-800" />
          <button class="text-blue-500 text-sm font-medium">수정</button>
        </div>
      </div>

      <div>
        <label> 발급일자 </label>
        <div class="flex items-center justify-between border rounded-md px-3 py-2">
          <input class="text-gray-800" />
          <button class="text-blue-500 text-sm font-medium">수정</button>
        </div>
      </div>
    </div>

    <!-- 촬영 or 등록 버튼 -->
    <div class="flex gap-3 mt-10">
      <!-- 다시 촬영 버튼 -->
      <button
        class="flex-1 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold text-center shadow-sm"
      >
        다시 촬영
      </button>

      <!-- 등록하기 버튼: 임시 -->
      <button
        class="flex-1 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-center shadow-sm"
      >
        등록하기
      </button>
    </div>
  </div>
</template>

<script setup>
import Idcard from "@/assets/Idcard.png";
</script>
