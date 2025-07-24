import { defineStore } from "pinia";
import { ref } from "vue";

export const useGroupAccountStore = defineStore("groupAccount", () => {
  const email = ref("");
  const groupAccountPassword = ref("");
  const groupAccountName = ref("");

  const emailSet = (newEmail) => {
    email.value = newEmail;
  };
  const setGroupAccountInfo = (password, name) => {
    groupAccountPassword.value = password;
    groupAccountName.value = name;
  };

  return {
    email,
    groupAccountPassword,
    groupAccountName,
    emailSet,
    setGroupAccountInfo,
  };
});
