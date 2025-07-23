<script setup>
import { ref, computed, watch } from 'vue';
import TrippyLogo from '@/assets/svg/trippy-logo.svg';
import AgreementCheck from '@/components/common/AgreementCheck.vue';
import AgreementItem from '@/components/common/AgreementItem.vue';
import { agreementStep1, agreementStep2 } from '@/_dummy/agreement_dummy';
import NextButton from '@/components/common/NextButton.vue';
import EmailInput from '@/components/common/EmailInput.vue';
import AccountNotice from '@/components/groupAccount/AccountNotice.vue';
import { useGroupAccountStore } from '@/stores/groupAccountStore';

const email = ref('');

const checkedItems = ref(new Array(agreementStep1.length).fill(false));
const groupAccountStore = useGroupAccountStore();

// 전체 선택 여부 계산
const allChecked = computed(() => checkedItems.value.every(v => v));

const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
const formValid = computed(() => allChecked.value && isEmailValid.value);

// 전체 선택 클릭 핸들러
const toggleAllCheck = () => {
  const newState = !allChecked.value;
  checkedItems.value = checkedItems.value.map(() => newState);
};

//이메일 입력 하면 자동으로 pinia에 저장
watch(email, (newVal) => {
  groupAccountStore.emailSet(newVal);
});

// 개별 선택 핸들러
const toggleItem = (index) => {
  checkedItems.value[index] = !checkedItems.value[index];
};
</script>
<template>
  <div class="con">
    <TrippyLogo class="w-64 mt-30 m-auto mt-[8.5vh]" />
    <AgreementCheck @click="toggleAllCheck" :class="[!allChecked ? 'bg-gray-400' : 'bg-main-gradient']" class="mt-14"
      title="전체 동의" />
  </div>
  <AgreementItem v-for="(item, index) in agreementStep1" :key="index" :title="item.title" :visible="checkedItems[index]"
    @click="() => toggleItem(index)" />
  <EmailInput class="mt-2" v-model="email" />
  <div class="mt-5">
    <AccountNotice class="mt-1 caption3 text-gray-400 text-center" v-for="(item, index) in agreementStep2" :key="index"
      :title="item.title" />
  </div>
  <NextButton title="다음" To="group-account-step2" :visible="formValid" />
</template>

<style scoped></style>
