<script setup>
import Input from '@/components/common/Input.vue';
import RegistNumberInput from '@/components/common/RegistNumberInput.vue';
</script>

<template>
  <div class="flex flex-col gap-8">
    <Input label="이름" placeholder="이름을 입력해 주세요." />
    <RegistNumberInput />
    <Input label="휴대폰 번호" placeholder="예) 01012345678" />
  </div>
</template>
