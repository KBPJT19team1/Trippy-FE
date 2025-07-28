<script setup>
import { ref } from "vue";
import { useExchangeStore } from "@/stores/exchangeStore.js";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

//수출입은행 현재환율api 인증키
const authkey = "수출입은행 현재환율 api 인증키 부분";

const exchangeStore = useExchangeStore();

const { getCountryCode, todayRates, setSelectedCurrencyCode } = exchangeStore;

const handleSelect = (code) => {
  setSelectedCurrencyCode(code);
};

const router = useRouter();
const goToAccountView = () => {
  router.push("/exchange-currency-account");
};

const loading = ref(false);
const error = ref("");
</script>

<template>
  <div class="w-11/12 flex flex-col h-full">
    <h3 class="font-semibold text-xl">어떤 돈으로 환전할까요?</h3>
    <br />

    <div v-if="loading">데이터 불러오는 중...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>

    <ul v-else class="divide-y divide-gray-200 flex-1 overflow-auto hide-scrollbar">
      <li
        v-for="item in todayRates"
        :key="item.cur_unit"
        class="flex items-center justify-between py-4"
      >
        <div class="flex">
          <span class="w-10">
            <img
              :src="`https://flagcdn.com/w40/${getCountryCode(item.cur_unit)}.png`"
              :alt="item.cur_nm"
              class="w-10 h-7 rounded"
            />
          </span>
          <span class="font-semibold text-sm text-gray-600 px-4">{{ item.cur_nm }}</span>
        </div>
        <div>
          <button
            @click="
              handleSelect(item.cur_unit);
              goToAccountView();
            "
            class="p-2"
          >
            <Icon class="right-6 w-6 h-6 text-gray-400" icon="material-symbols:check"></Icon>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 스크롤바 숨기는 css */

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
.hide-scrollbar {
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
