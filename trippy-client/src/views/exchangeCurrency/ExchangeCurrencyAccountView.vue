<script setup>
import { bankAccounts } from "@/_dummy/bankAccounts_dummy";
import { useExchangeStore } from "@/stores/exchangeStore";
import { storeToRefs } from "pinia";

const accountStore = useExchangeStore();
const { selectedAccount } = storeToRefs(accountStore);
const { setSelectedAccount } = accountStore;

const handleSelect = (account) => {
  setSelectedAccount(account);
  console.log("사용자가 선택한 계좌번호 : ", account);
};
</script>

<template>
  <h2 class="font-bold m-10 title2">환전할 계좌를 선택해주세요</h2>
  <div v-if="selectedAccount" class="text-center border-b-2 border-b-gray-300 p-2 w-[20rem]">
    <p class="title4">{{ selectedAccount.bankName }} {{ selectedAccount.accountNumber }}</p>
  </div>
  <div v-else class="text-center border-b-2 border-b-gray-300 p-2 w-[20rem]">
    <p class="title4 text-gray-400">계좌를 선택해 주세요</p>
  </div>
  <br />
  <div class="w-full">
    <ul class="mx-3">
      <h3 class="subtitle1 gap-8">내 계좌</h3>
      <li
        class="flex gap-4 cursor-pointer my-2"
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
  <div>
    <!-- 버튼 삽입 영역 -->
    <button class="w-[21.4375rem] h-[3rem] bg-main-gradient text-white font-bold rounded mt-4">
      다음
    </button>
  </div>
</template>

<style></style>
