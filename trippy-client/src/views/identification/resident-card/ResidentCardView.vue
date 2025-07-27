<script setup>
import Idcard from "@/assets/Idcard.png";
import TabMenu from "@/components/common/TabMenu.vue";
import DefaultProfile from "@/assets/svg/person.svg";

import DefaultQr from "@/assets/default_qr.png";
import { computed, ref } from "vue";
import IdCardUnregisterd from "@/components/identification/IdCardUnregisterd.vue";
import Toggle from "@/components/identification/Toggle.vue";
import HeaderNotice from "@/components/identification/HeaderNotice.vue";
import ToggleVueButton from "@/components/identification/ToggleVueButton.vue";
import QrDisplay from "@/components/identification/QrDisplay.vue";
import FooterInfo from "@/components/identification/FooterInfo.vue";
import DetailInfo from "@/components/identification/DetailInfo.vue";

const isRegistered = ref(false); // 임시로 고정 설정
const currentTab = ref("여권");
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

<template>
  <div class="w-full">
    <TabMenu :tabs="['주민등록', '여권']" v-model:tab="currentTab" />

    <!-- TODO: 나중에 특정 라우터로 이동 -->
    <div v-if="currentTab === '주민등록'">
      <!-- ----------------신분증 등록 안 된 경우---------------- -->
      <div v-if="!isRegistered">
        <IdCardUnregisterd
          v-if="!isRegistered"
          :image="Idcard"
          docType="주민등록증"
          @registerClick="() => console.log('주민등록증 등록 클릭')"
        />
      </div>

      <!-- ----------------신분증 등록된 경우----------------  -->
      <div
        v-else
        class="w-full h-[32rem] rounded-xl shadow-md flex flex-col"
        :class="{ 'bg-gray-100': showDetail, 'bg-white': !showDetail }"
      >
        <!-- 안내 문구 -->
        <HeaderNotice
          text="주민등록증 이미지 위변조 및 부정 사용 금지(위반 시 3년 이하의 징역 또는 3천만원 벌금)"
        />

        <!-- 디폴트 프로필 -->
        <div class="bg-gray-200 flex flex-col h-48 justify-end items-center">
          <DefaultProfile class="w-40 h-[9.5rem]" alt="profile" />
        </div>

        <div class="mt-4 flex w-full items-center-justify-start px-4">
          <DetailInfo
            name="홍길동"
            :maskedId="maskedId"
            :idNumber="'010123-1234567'"
            address="서울 특별시 광진구 능동로 195-16"
            :showDetail="showDetail"
          />

          <!-- 내용 -->
          <div class="flex flex-col item-center ml-auto">
            <!-- QR -->
            <div v-if="!showDetail">
              <QrDisplay :qrImage="DefaultQr" :progress="70" :timeLeft="8" />
            </div>
            <div v-else>
              <!-- 토글 -->
              <Toggle v-model="toggleOn" />
            </div>
          </div>
        </div>

        <!-- 법적 효력 안내 -->
        <FooterInfo infoText="법적 효력 안내 >" date="2019.12.13." />

        <!-- 상세정보 표시버튼 -->
        <ToggleVueButton v-model="showDetail" detailText="상세정보 표시" qrText="QR정보 표기" />
      </div>
    </div>

    <div v-if="currentTab === '여권'">
      <div v-if="!isRegistered">
        <IdCardUnregisterd
          v-if="!isRegistered"
          :image="Idcard"
          docType="여권"
          @registerClick="() => console.log('여권 등록 클릭')"
        />
      </div>
    </div>
  </div>
</template>
