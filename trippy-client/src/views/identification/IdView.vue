<script setup>
import Idcard from "@/assets/Idcard.png";
import TabMenu from "@/components/common/TabMenu.vue";
import DefaultProfile from "@/assets/svg/person.svg";

import DefaultQr from "@/assets/default_qr.png";
import { computed, ref } from "vue";

const isRegistered = ref(true); // 임시로 고정 설정
const currentTab = ref("주민등록");
const showDetail = ref(false);
const toggleOn = ref(false);

const rawId = "010123-1234567";
const maskedId = computed(() => {
  const [front, back] = rawId.split("-");
  if (!toggleOn.value) return rawId; // 토글 OFF → 전체 표시
  const maskedBack = back[0] + "*".repeat(back.length - 1); // 첫 자리만 남기고 마스킹
  return `${front}-${maskedBack}`;
});
</script>

<style scoped>
.card-header-gradient {
  background: linear-gradient(90deg, #6ae4ff 0%, #236fff 43.23%, #236fff 58.33%, #a38eff 100%);
}
</style>

<template>
  <div class="w-full">
    <TabMenu :tabs="['주민등록', '여권']" v-model:tab="currentTab" />

    <div v-if="currentTab === '주민등록'">
      <!-- ----------------신분증 등록 안 된 경우---------------- -->
      <div
        v-if="!isRegistered"
        class="w-full h-[32rem] rounded-xl shadow-md bg-white flex flex-col"
      >
        <div class="flex-1 flex flex-col items-center justify-center">
          <img :src="Idcard" class="w-[15rem] h-auto mb-2" />
          <!-- 안내 문구 -->
          <p class="text-center text-gray-700 body1">
            모바일 주민등록증 확인 서비스를<br />
            등록 하시겠습니까?
          </p>
        </div>

        <!-- 등록 버튼 -->
        <button
          class="card-footer-button w-full py-3 rounded-b-lg shadow-md text-white bg-main-gradient button1 text-center mt-auto"
        >
          주민등록증 등록
        </button>
      </div>

      <!-- ----------------신분증 등록된 경우----------------  -->
      <div
        v-else
        class="w-full h-[32rem] rounded-xl shadow-md flex flex-col"
        :class="{ 'bg-gray-100': showDetail, 'bg-white': !showDetail }"
      >
        <!-- 안내 문구 -->
        <!-- 글씨 크기가 더 작아야 해서 0.62rem으로 일단 넣음 -->
        <div
          class="card-header-gradient w-full text-white flex flex-col text-[0.62rem] py-1 rounded-t-xl whitespace-nowrap"
        >
          주민등록증 이미지 위변조 및 부정 사용 금지(위반 시 3년 이하의 징역 또는 3천만원 벌금)
        </div>

        <!-- 디폴트 프로필 -->
        <div class="bg-gray-200 flex flex-col h-48 justify-end items-center">
          <DefaultProfile class="w-40 h-[9.5rem]" alt="profile" />
        </div>

        <div class="mt-4 flex w-full items-center-justify-start px-4">
          <div class="flex flex-col">
            <!-- 안내 문구 -->
            <p class="text-gray-500 caption4">모바일 신분증 확인 서비스</p>
            <!-- 이름 -->
            <h2 class="mt-1 title1">홍길동</h2>

            <div v-if="showDetail">
              <div class="mt-1 title2">
                <h2>{{ maskedId }}</h2>
              </div>
              <div class="mt-9 body2">
                <p>서울 특별시 광진구 능동로 195-16</p>
              </div>
            </div>
          </div>

          <!-- 내용 -->
          <div class="flex flex-col item-center ml-auto">
            <!-- QR -->
            <div v-if="!showDetail">
              <div class="w-32 h-32 mb-3 bg-white-300 rounded-md flex item-center justify-center">
                <img :src="DefaultQr" alt="QR Code" class="max-w-full max-h-full" />
              </div>
              <!-- 진행바 -->
              <div class="w-full h-1 bg-gray-200 rounded-full mt-1">
                <div class="h-1 bg-blue-500 rounded-full" style="width: 70%"></div>
              </div>
              <!-- 남은 시간 -->
              <p class="text-gray-400 caption3">남은 시간: 8초</p>
            </div>

            <div v-else>
              <!-- 토글 -->
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="toggleOn" class="sr-only" />

                <div class="w-14 h-6 bg-black rounded-full relative transition-colors duration-300">
                  <div
                    class="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform duration-300"
                    :class="{ 'translate-x-8': toggleOn }"
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <!-- 법적 효력 안내 -->
        <div class="p-4 mt-auto">
          <div class="flex items-center justify-between">
            <!-- TODO: 링크 걸어두기 -->
            <p class="text-gray-500 caption2">법적 효력 안내 ></p>
            <p class="subtitle2">2019.12.13.</p>
          </div>
        </div>
        <!-- 상세정보 표시버튼 -->
        <button
          class="bg-main-gradient w-full py-3 rounded-b-lg shadow-md text-white font-bold text-center"
          @click="showDetail = !showDetail"
        >
          {{ showDetail ? "QR 정보 표시" : "상세정보 표시" }}
        </button>
      </div>
    </div>

    <div v-if="currentTab === '여권'">
      <h1>여권</h1>
    </div>
  </div>
</template>
