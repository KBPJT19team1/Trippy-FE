import { defineStore } from "pinia";
import { ref } from "vue";

export const useGroupAccountStore = defineStore("counter", () => {
  const emaile = ref("");

  const emailSet = (email) => {
    emaile.value = email;
  };

  return { emaile, emailSet };
});
