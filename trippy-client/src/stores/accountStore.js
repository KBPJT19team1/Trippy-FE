import { defineStore } from "pinia";
import { ref } from "vue";
import accountsSample from "@/_dummy/accounts_sample.json";

export const useAccountStore = defineStore("Account", () => {
  const accountList = ref([]);

  const GetAccountList = () => {
    accountList.value = accountsSample;
  };
  return { accountList, GetAccountList };
});
