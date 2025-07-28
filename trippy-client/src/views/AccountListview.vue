<script setup>
import UnifiedAccountCard from "@/components/account/UnifiedAccountCard.vue";
import ToggleSwitch from "@/components/common/ToggleSwitch.vue";
import { useAccountStore } from "@/stores/accountStore";
import { Icon } from "@iconify/vue";
import { onMounted, ref, computed } from "vue";

const accountStore = useAccountStore();

const showGroupAccount = ref(false);

const filteredAccountList = computed(() => {
  console.log("현재 토글 상태:", showGroupAccount.value);
  console.log("전체 계좌:", accountStore.accountList);

  if (showGroupAccount.value) {
    return accountStore.accountList.filter((account) => account.type === "group");
  } else {
    return accountStore.accountList.filter((account) => account.type === "personal");
  }
});

onMounted(() => {
  accountStore.GetAccountList();
});
</script>

<template>
  <div class="h-full">
    <div class="flex justify-between items-center mb-3">
      <ToggleSwitch :label="'모임통장 보기'" @click="showGroupAccount = !showGroupAccount" />
      <div class="flex">
        <p class="caption3 text-gray-500">계좌 추가하기</p>
        <Icon icon="material-symbols:arrow-back-ios-new-rounded" class="rotate-180" />
      </div>
    </div>

    <div class="h-full overflow-scroll [&::-webkit-scrollbar]:hidden">
      <UnifiedAccountCard
        v-for="(account, i) in filteredAccountList"
        :key="i"
        :account="account"
        :ifGroupAccount="showGroupAccount"
        class="my-3"
      />
    </div>
  </div>
</template>

<style scoped></style>
