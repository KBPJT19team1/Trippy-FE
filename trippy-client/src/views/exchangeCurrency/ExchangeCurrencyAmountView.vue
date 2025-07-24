<script setup>
import { onMounted, ref, watch } from "vue";
import { useExchangeStore } from "@/stores/exchangeStore";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";
import triangle from "@/assets/svg/triangle.svg";
import exchangeRates from "@/_dummy/exchange_dummy.json";

const accountStore = useExchangeStore();

const {
  selectedAccount,
  selectedCurrencyCode,
  selectedTodayRate,
  selectedCurrencyName,
  foreignCurrencyAccount,
} = storeToRefs(accountStore);
const { setSelectedAccount } = accountStore;

const loading = ref(true);
const error = ref("");

// div 부분 영역 클릭해도 입력칸 활성화되는 코드
const foreignInputRef = ref(null);
const krwInputRef = ref(null);

const focusForeignInput = () => {
  foreignInputRef.value?.focus();
};
const focusKrwInput = () => {
  krwInputRef.value?.focus();
};

// 입력값 환율 자동 계산해주는 부분
const foreignAmount = ref("");
const krwAmount = ref("");

let updatingFromForeign = false;
let updatingFromKrw = false;

watch(krwAmount, (newVal) => {
  if (updatingFromForeign) {
    updatingFromForeign = false;
    return;
  }
  if (!selectedTodayRate.value?.deal_bas_r) return;

  const rate = Number(selectedTodayRate.value.deal_bas_r);
  const krw = parseFloat(newVal);
  if (isNaN(krw)) {
    foreignAmount.value = " ";
    return;
  }
  updatingFromKrw = true;
  foreignAmount.value = (krw / rate).toFixed(2);
});

watch(foreignAmount, (newVal) => {
  if (updatingFromKrw) {
    updatingFromKrw = false;
    return;
  }
  if (!selectedTodayRate.value?.deal_bas_r) return;
  const rate = Number(selectedTodayRate.value.deal_bas_r);
  const foreign = parseFloat(newVal);
  if (isNaN(foreign)) {
    krwAmount.value = " ";
    return;
  }
  updatingFromForeign = true;
  krwAmount.value = (foreign * rate).toFixed(0);
});

onMounted(async () => {
  try {
    console.log("선택한 계좌는 ", selectedAccount.value);
    console.log("선택한 통화는 ", selectedCurrencyCode.value);
  } catch (e) {
    error.value = "환율 데이터를 불러오는 데 실패했습니다.";
    console.error(e);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="flex gap-12">
    <p class="subtitle2">1 {{ selectedCurrencyCode }} = {{ selectedTodayRate.deal_bas_r }} 원</p>
    <div class="flex text-gray-500">
      <a class="subtitle2">원하는 환율에 사기</a>
      <Icon icon="ic:round-navigate-next" class="w-[1.3rem] h-[1.3rem]"></Icon>
    </div>
  </div>
  <br />

  <div class="flex justify-between w-full h-20 bg-gray-200 rounded" @click="focusForeignInput">
    <div class="my-auto ml-5">
      <p class="subtitle2">{{ selectedCurrencyName }}</p>
      <p>잔액 : {{ foreignCurrencyAccount.balance }} {{ selectedCurrencyCode }}</p>
    </div>
    <div class="flex gap-2 my-auto mr-5">
      <input
        ref="foreignInputRef"
        type="text"
        v-model="foreignAmount"
        @input="foreignAmount = foreignAmount.replace(/[^0-9]/g, '')"
        class="bg-transparent w-[6rem] text-right"
      />
      <p>{{ selectedCurrencyCode }}</p>
    </div>
  </div>

  <div>
    <triangle class="m-1"></triangle>
    <triangle class="scale-y-[-1] m-1"></triangle>
  </div>

  <div class="flex justify-between w-full h-20 bg-gray-200 rounded" @click="focusKrwInput">
    <div class="my-auto ml-5">
      <p class="subtitle2">대한민국 원</p>
      <p>잔액 : {{ selectedAccount.balance }} 원</p>
    </div>
    <div class="flex gap-2 my-auto mr-5">
      <input
        ref="krwInputRef"
        type="text"
        v-model="krwAmount"
        @input="krwAmount = krwAmount.replace(/[^0-9]/g, '')"
        class="bg-transparent w-[6rem] text-right"
      />
      <p>KRW</p>
      <!-- 외화계좌 잔액으로 넣어야 함 -->
    </div>
  </div>

  <br />
  <div class="flex gap-4">
    <p>
      {{ selectedAccount.bankName }}
    </p>
    <p>
      {{ selectedAccount.accountNumber }}
    </p>
  </div>
  <div></div>
</template>

<style></style>
