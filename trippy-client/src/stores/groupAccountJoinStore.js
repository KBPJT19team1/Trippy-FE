import { ref } from "vue";
import { defineStore } from "pinia";

export const useGroupJoinStore = defineStore("groupJoin", () => {
  const userId = ref("");
  //모임통장 계좌
  const groupAccountNumber = ref("");
  //대표계좌
  const representativeAccount = ref("");
  //대표계좌 은행
  const representativeAccountBank = ref("");
  // 모임원 분류
  const userRole = ref("member");

  const setRepresentativeAccount = (number, bank) => {
    representativeAccount.value = number;
    representativeAccountBank.value = bank;
  };

  return {
    userId,
    groupAccountNumber,
    representativeAccount,
    representativeAccountBank,
    userRole,
    setRepresentativeAccount,
  };
});
