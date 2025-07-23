<script setup>
import AgreementAccountPassword from '@/components/group-account/AgreementAccountPassword.vue';
import { ref } from 'vue'


const pin = ref('');
const pinChexk = ref("")


</script>

<template>
  <div class="bg-main-gradient mt-10 w-full h-40 p-4 rounded-xl">
    <div class="flex gap-2 flex-col items-center justify-center h-full text-white">
      <p class="title2">Trippy</p>
      <p class="title1">모임통장</p>
    </div>
  </div>

  <div class="w-full flex flex-col items-center mt-5">
    <AgreementAccountPassword v-model="pin" :title="'통장 비밀번호 설정'" />
    <AgreementAccountPassword v-model="pinChexk" :title="'통장 비밀번호 확인'" />
  </div>



</template>

<style scoped></style>
