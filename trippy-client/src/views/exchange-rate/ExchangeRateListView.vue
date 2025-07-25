<script setup>
import { useExchangeStore } from "@/stores/exchangeStore.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const exchangeStore = useExchangeStore();

const { todayRates, loading, getYesterdayRate, getCountryCode } = exchangeStore;

const error = ref("");

const router = useRouter();
const goToExchangeCurrencyiew = () => {
  router.push("/exchange-currency");
};
</script>

<template>
  <div class="exchange-list w-11/12 flex flex-col h-full">
    <h3 class="font-semibold text-xl">오늘의 환율 정보</h3>
    <br />

    <div v-if="loading">데이터 불러오는 중...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>

    <div
      v-else
      class="w-full overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <ul class="divide-y divide-gray-200 flex-1">
        <li
          v-for="item in todayRates"
          :key="item.cur_unit"
          class="flex items-center justify-between py-4"
        >
          <div class="flex">
            <div class="w-10">
              <img
                :src="`https://flagcdn.com/w40/${getCountryCode(item.cur_unit)}.png`"
                :alt="item.cur_nm"
                class="w-10 h-7 rounded"
              />
            </div>
            <span class="font-semibold text-sm text-gray-900 px-4">
              {{ item.cur_nm }}
            </span>
          </div>
          <div class="flex flex-col text-right text-m">
            <span class="text-sm font-semibold">{{ item.deal_bas_r }}원</span>
            <div
              :class="{
                'text-red':
                  parseFloat(item.deal_bas_r) - parseFloat(getYesterdayRate(item.cur_unit)) >= 0,
                'text-blue-400':
                  parseFloat(item.deal_bas_r) - parseFloat(getYesterdayRate(item.cur_unit)) < 0,
              }"
            >
              <span class="text-xs text-right">
                {{
                  (
                    parseFloat(item.deal_bas_r) - parseFloat(getYesterdayRate(item.cur_unit))
                  ).toFixed(2)
                }}원
              </span>
              <span class="text-xs">
                {{
                  "(" +
                  (
                    (parseFloat(item.deal_bas_r) - parseFloat(getYesterdayRate(item.cur_unit))) /
                    parseFloat(getYesterdayRate(item.cur_unit))
                  ).toFixed(2) +
                  "%)"
                }}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <button
        @click="goToExchangeCurrencyiew"
        class="w-[100%] h-[2rem] bg-main-gradient text-white font-bold rounded mt-4"
      >
        환전하기
      </button>
    </div>
  </div>
</template>

<style scoped></style>
