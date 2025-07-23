<script setup>
import { ref } from 'vue';

import Input from '@/components/common/Input.vue';
import RegistNumberInput from '@/components/common/RegistNumberInput.vue';
import SlidingModal from '@/components/common/SlidingModal.vue';

const showModal = ref(false);
</script>

<template>
  <div class="flex flex-col gap-8">
    <Input label="이름" placeholder="이름을 입력해 주세요." />
    <RegistNumberInput />
    <Input label="휴대폰 번호" placeholder="예) 01012345678" />
    <button @click="showModal = true">다음</button>
  </div>

  <SlidingModal v-model="showModal">
    약관 동의해라
  </SlidingModal>
</template>
