import { ref } from "vue";
import { defineStore } from "pinia";

export const useGroupJoinStore = defineStore("groupJoin", () => {
  const userId = ref("");
  //모임통장 계좌
  const groupAccountNumber = ref("");
  //모임통장 이름
  const groupAccountName = ref("떠나자");
  //대표계좌
  const representativeAccount = ref("");
  //대표계좌 은행
  const representativeAccountBank = ref("");
  //모임원 분류
  const userRole = ref("member");
  //가입 시간
  const joinDateTime = ref("2025.07.29 13:13:13");

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
    groupAccountName,
    joinDateTime,
    setRepresentativeAccount,
  };
});
