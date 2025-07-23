import { defineStore } from "pinia";
import { ref } from "vue";

export const useGroupAccountStore = defineStore("groupAccount", () => {
  const email = ref("");

  const emailSet = (newEmail) => {
    email.value = newEmail;
  };

  return { email, emailSet };
});
