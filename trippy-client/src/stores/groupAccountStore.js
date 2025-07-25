import { defineStore } from "pinia";
import { ref } from "vue";

export const useGroupAccountStore = defineStore("groupAccount", () => {
  const email = ref("");
  //모임계좌비밀번호
  const groupAccountPassword = ref("");
  //모임계좌이름
  const groupAccountName = ref("");

  //모임주 대표계좌 선택
  const representativeAccount = ref("");
  //모임주 대표계좌 은행
  const representativeAccountBank = ref("");

  const emailSet = (newEmail) => {
    email.value = newEmail;
  };
  const setGroupAccountInfo = (password, name) => {
    groupAccountPassword.value = password;
    groupAccountName.value = name;
  };

  const setRepresentativeAccount = (representativeAccountVal, representativeAccountBankVal) => {
    representativeAccount.value = representativeAccountVal;
    representativeAccountBank.value = representativeAccountBankVal;
    console.log(`${(representativeAccount, representativeAccountBank)}`);
  };

  return {
    email,
    groupAccountPassword,
    groupAccountName,
    representativeAccount,
    representativeAccountBank,
    emailSet,
    setGroupAccountInfo,
    setRepresentativeAccount,
  };
});
