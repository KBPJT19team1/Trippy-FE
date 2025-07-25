<script setup>
import { Icon } from "@iconify/vue";
import { defineProps, ref } from "vue";

const props = defineProps({
  accountList: Array,
  accountBank: String,
  accountNumber: String,
});

const emits = defineEmits(["selectAccount"]);

const isOpen = ref(false);

const openList = () => {
  isOpen.value = !isOpen.value;
};

const selectAccount = (account) => {
  emits("selectAccount", account);
};
</script>

<template>
  <div class="w-full">
    <div
      @click="openList"
      class="text-center bg-gray-200 rounded-xl h-16 mt-10 flex items-center justify-center gap-8"
    >
      <p
        class="button1 text-center ml-20 flex-1"
        :class="props.accountBank ? 'text-black' : 'text-gray-400'"
      >
        {{
          props.accountBank && props.accountNumber
            ? `${props.accountBank}   ${props.accountNumber}`
            : "대표계좌를 선택해 주세요"
        }}
      </p>
      <Icon
        icon="material-symbols:keyboard-arrow-down-rounded"
        class="transform size-9 w-12"
        :class="isOpen ? '' : 'rotate-180'"
      />
    </div>

    <div class="w-full bg-gray-200 mt-[-2vh] rounded-xl pt-5" v-if="isOpen">
      <ul class="p-2">
        <li
          v-for="account in props.accountList"
          :key="account.account"
          class="hover:bg-gray-300 rounded-xl h-9 cursor-pointer transition-colors duration-200"
          @click="selectAccount(account)"
        >
          <div class="flex justify-between items-center pt-2 mx-3">
            <p class="body2">{{ account.bankName }}</p>
            <p class="body2">{{ account.account }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
