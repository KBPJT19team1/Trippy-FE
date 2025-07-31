<script setup>
import { ref, watch } from "vue";
import { useExchangeStore } from "@/stores/exchangeStore";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";
import triangle from "@/assets/svg/triangle.svg";
import NextButton from "@/components/common/NextButton.vue";
import { useRouter } from "vue-router";

const exchangeStore = useExchangeStore();

const {
  selectedAccount,
  selectedCurrencyCode,
  selectedTodayRate,
  selectedCurrencyName,
  foreignCurrencyAccount,
  inputForeignAmount,
  inputKrwAmount,
} = storeToRefs(exchangeStore);
const { parseCurrencyCode } = exchangeStore;

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

inputForeignAmount.value = foreignAmount.value;
inputKrwAmount.value = krwAmount.value;

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

  inputKrwAmount.value = parseFloat(newVal).toFixed(2);
  inputForeignAmount.value = parseFloat(foreignAmount.value);
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
  inputForeignAmount.value = parseFloat(newVal).toFixed(2);
  inputKrwAmount.value = parseFloat(krwAmount.value).toFixed(2);
});

// 기존 잔액이 없는 외화통화에 대한 환전 시 잔액 0 데이터 추가
watch(selectedCurrencyCode, (newCode) => {
  if (
    foreignCurrencyAccount.value?.accountType === "외화예금" &&
    foreignCurrencyAccount.value.balance &&
    foreignCurrencyAccount.value.balance[newCode] === undefined
  ) {
    foreignCurrencyAccount.value.balance[newCode] = 0;
  }
});

const router = useRouter();
const goToPasswordView = () => {
  router.push("/exchange-currency-password");
};
</script>

<template>
  <div class="flex flex-col h-full justify-between">
    <div>
      <div class="w-full flex flex-col items-center p-4">
        <div class="flex flex-wrap w-full items-center justify-between">
          <p class="subtitle2 break-words">
            1 {{ selectedCurrencyCode }} = {{ selectedTodayRate.deal_bas_r }} 원
          </p>
          <div class="flex text-gray-500 break-words items-center">
            <a class="subtitle2"> 원하는 환율에 사기</a>
            <Icon icon="ic:round-navigate-next" class="w-8 h-auto"></Icon>
          </div>
        </div>

        <div class="flex justify-between gap-4 mb-0 m-8" @click="focusForeignInput">
          <p class="subtitle2">{{ selectedCurrencyName }}</p>
          <p class="whitespace-nowrap">
            잔액 : {{ foreignCurrencyAccount.balance[selectedCurrencyCode] || 0 }}
            {{ parseCurrencyCode(selectedCurrencyCode) }}
          </p>
        </div>
        <div class="flex justify-end w-full h-auto bg-gray-200 rounded-xl">
          <input
            ref="foreignInputRef"
            type="text"
            v-model="foreignAmount"
            maxlength="10"
            @input="
              foreignAmount = foreignAmount
                .replace(/[^0-9.]/g, '')
                .replace(/^0+(?=\d)/, '')
                .replace(/(\..*?)\..*/g, '$1')
            "
            class="bg-transparent border-nonde focus:outline-none text-right"
          />
          <p class="mx-4">
            {{ parseCurrencyCode(selectedCurrencyCode) }}
          </p>
        </div>
        <!-- 원래 코드 -->

        <div class="flex flex-col justify-center my-2">
          <triangle class="m-1"></triangle>
          <triangle class="scale-y-[-1] m-1"></triangle>
        </div>

        <div class="flex justify-between w-full h-20 bg-gray-200 rounded-xl" @click="focusKrwInput">
          <div class="my-auto ml-5">
            <p class="subtitle2">대한민국 원</p>
            <p class="whitespace-nowrap">잔액 : {{ selectedAccount.balance }} 원</p>
          </div>
          <div class="flex gap-2 my-auto mr-5">
            <input
              ref="krwInputRef"
              type="text"
              v-model="krwAmount"
              maxlength="10"
              @input="
                krwAmount = krwAmount
                  .replace(/[^0-9.]/g, '')
                  .replace(/^0+(?=\d)/, '')
                  .replace(/(\..*?)\..*/g, '$1')
              "
              class="bg-transparent w-full sm:w-[6rem] text-right"
            />
            <p>KRW</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <NextButton title="확인" @click="goToPasswordView"></NextButton>
    </div>
  </div>
</template>

<style></style>
