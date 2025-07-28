<script setup>
import { bankAccounts } from "@/_dummy/bankAccounts_dummy";
import { useExchangeStore } from "@/stores/exchangeStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import NextButton from "@/components/common/NextButton.vue";

const accountStore = useExchangeStore();
const { selectedAccount } = storeToRefs(accountStore);
const { setSelectedAccount } = accountStore;

const handleSelect = (account) => {
  setSelectedAccount(account);
};

const router = useRouter();
const goToAmountView = () => {
  router.push("/exchange-currency-amount");
};
</script>

<template>
  <div class="flex h-full flex-col justify-between">
    <div>
      <h2 class="font-bold m-10 text-center title2">환전할 계좌를 선택해주세요</h2>
      <div
        v-if="selectedAccount"
        class="text-center border-b-2 border-b-gray-300 p-2 w-[20rem] mx-auto"
      >
        <p class="title4">{{ selectedAccount.bankName }} {{ selectedAccount.accountNumber }}</p>
      </div>
      <div v-else class="text-center border-b-2 border-b-gray-300 p-2 w-[20rem] mx-auto">
        <p class="title4 text-gray-400">계좌를 선택해 주세요</p>
      </div>
      <div class="w-auto h-[27rem] overflow-auto hide-scrollbar">
        <ul class="mx-3">
          <h3 class="subtitle1 gap-8 mt-5">내 계좌</h3>
          <li
            class="flex gap-4 cursor-pointer my-5"
            v-for="account in bankAccounts"
            :key="account.accountNumber"
            @click="handleSelect(account)"
          >
            <img :src="account.logo" :alt="account.bankName" />
            <div class="flex-col">
              <p class="flex gap-4 subtitle2">{{ account.accountType }}</p>
              <div class="flex gap-2 body2">
                <p>{{ account.bankName }}</p>
                <p>{{ account.accountNumber }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <next-button title="다음" @click="goToAmountView" :disabled="!selectedAccount"></next-button>
  </div>
</template>

<style>
/* 스크롤바 숨기는 css */

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
.hide-scrollbar {
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
