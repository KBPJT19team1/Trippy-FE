<script setup>
import { ref, onMounted } from "vue";
import { useExchangeStore } from "@/stores/exchangeStore.js";
import { Icon } from "@iconify/vue";

//수출입은행 현재환율api 인증키
const authkey = "수출입은행 현재환율 api 인증키 부분";

const exchangeStore = useExchangeStore();

const { getCountryCode, todayRates } = exchangeStore;

const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    // ------------
  } catch (e) {
    error.value = "환율 데이터를 불러오는 데 실패했습니다.";
    console.error(e);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="exchange-list w-11/12 flex flex-col h-full">
    <h3 class="font-semibold text-xl">어떤 돈으로 환전할까요?</h3>
    <br />

    <div v-if="loading">데이터 불러오는 중...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>

    <ul v-else class="divide-y divide-gray-200 flex-1 overflow-auto">
      <li
        v-for="item in todayRates"
        :key="item.cur_unit"
        class="flex items-center justify-between py-4"
      >
        <div class="flex">
          <span class="w-10">
            <!-- 국기 표현 부분 -->
            <img
              :src="`https://flagcdn.com/w40/${getCountryCode(item.cur_unit)}.png`"
              :alt="item.cur_nm"
              class="w-10 h-7 rounded"
            />
          </span>
          <span class="font-semibold text-sm text-gray-600 px-4">{{ item.cur_nm }}</span>
        </div>
        <div>
          <button class="p-2">
            <Icon class="right-6 w-[2vw] h-auto text-gray-400" icon="material-symbols:check"></Icon>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
