<script setup>
import { ref } from "vue";
import accountList from "@/_dummy/accountList_dummy.json";
import RepresentativeAccountList from "@/components/group-account/RepresentativeAccountList.vue";
import { useGroupAccountStore } from "@/stores/groupAccountStore";
import AccountNotice from "@/components/group-account/AccountNotice.vue";

const groupAccountStore = useGroupAccountStore();

const selectAccountNumber = ref("");
const selectAccountBank = ref("");

const selectAccount = (account) => {
  selectAccountBank.value = account.bankName;
  selectAccountNumber.value = account.account;
  groupAccountStore.setRepresentativeAccount(selectAccountNumber.value, selectAccountBank.value);
};
</script>

<template>
  <div>
    <p class="title1 mt-40">대표계좌를 설정해 주세요</p>
  </div>
  <RepresentativeAccountList
    :accountList="accountList"
    @selectAccount="selectAccount"
    :accountBank="selectAccountBank"
    :accountNumber="selectAccountNumber"
  />
</template>

<style scoped></style>
