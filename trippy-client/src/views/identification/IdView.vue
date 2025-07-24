<script setup>
import Idcard from "@/assets/Idcard.png";
import TabMenu from "@/components/common/TabMenu.vue";

import { ref } from "vue";

const currentTab = ref("주민등록");
</script>

<template>
  <div class="w-full">
    <TabMenu :tabs="['주민등록', '여권']" v-model:tab="currentTab" />

    <!-- 색깔,  임시로 넣은거 피그마 참고하고 다시 넣기 -->
    <div v-if="currentTab === '주민등록'">
      <div class="w-full h-[34rem] rounded-xl shadow-md bg-white flex flex-col">
        <div class="flex-1 flex flex-col items-center justify-center">
          <img :src="Idcard" class="w-[15rem] h-auto mb-2" />
          <!-- 안내 문구 -->
          <p class="text-center text-gray-700">
            모바일 주민등록증 확인 서비스를<br />
            등록 하시겠습니까?
          </p>
        </div>

        <!-- 등록 버튼 -->
        <button
          class="w-full py-1.5 rounded-b-lg shadow-md bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-center mt-auto"
        >
          주민등록증 등록
        </button>
      </div>
    </div>

    <div v-if="currentTab === '여권'">
      <h1>hi</h1>
    </div>
  </div>
</template>
