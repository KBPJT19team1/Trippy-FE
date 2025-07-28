<script setup>
import { ref, defineEmits, computed } from "vue";

import { Icon } from "@iconify/vue";
import { bankAccounts } from "@/_dummy/bankAccounts_dummy.js";
import NextButton from "@/components/common/NextButton.vue";

const emit = defineEmits(["next"]);

const accountsData = ref(bankAccounts);

const toggleCheck = (index) => {
  if (!accountsData.value) return;

  accountsData.value[index].isChecked = !accountsData.value[index].isChecked;
};

const isAnyChecked = computed(() =>
  accountsData.value?.some((account) => account.isChecked)
);

const handleClick = () => {
  if (!accountsData.value) return;

  const selectedAccounts = accountsData.value.filter((a) => a.isChecked);
  console.log("선택된 계좌:", selectedAccounts);
  emit("next");
};
</script>

<template>
  <div class="flex flex-col gap-8 mt-4">
    <h1 class="title2">등록할 계좌를 선택해 주세요.</h1>
    <div class="flex flex-col gap-3 overflow-scroll mb-28">
      <div
        v-for="(item, index) in accountsData"
        @click="() => toggleCheck(index)"
        class="flex items-center justify-between p-4 bg-blue-100 rounded-xl active:bg-gray-200">
        <div class="flex items-center gap-4">
          <img :src="item.logo" class="size-9 bg-gray-100 rounded-full" />
          <div>
            <h3 class="subtitle1">{{ item.accountType }}</h3>
            <p class="body1">{{ item.bankName }} {{ item.accountNumber }}</p>
          </div>
        </div>
        <Icon
          :icon="item.isChecked ? 'material-symbols:check-circle-rounded' : 'material-symbols:check-circle-outline-rounded'"
          :class="['size-9', item.isChecked ? 'text-blue-400' : 'text-gray-400']"
        />
      </div>
    </div>
    <div class="fixed bottom-0 left-0 right-0 z-50 w-full max-w-full pt-4 pb-[34px] px-4 bg-white md:max-w-[375px] md:mx-auto">
      <NextButton
        title="계좌 등록하기"
        :disabled="!isAnyChecked"
        @click="handleClick"
      />
    </div>
  </div>
</template>
