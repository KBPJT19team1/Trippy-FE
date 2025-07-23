<script setup>
import AgreementAccountPassword from '@/components/group-account/AgreementAccountPassword.vue';
import { ref } from 'vue'

const pin = ref('');
const pinChexk = ref("")


</script>

<template>
  <div class="bg-main-gradient mt-10 w-full h-40 p-4 rounded-xl hover:opacity-90">
    <div class="flex gap-2 flex-col items-center justify-center h-full text-white">
      <p class="title2">Trippy</p>
      <p class="title1">모임통장</p>
    </div>
  </div>

  <AgreementAccountPassword v-model="pin" />
  <AgreementAccountPassword v-model="pinChexk" />



</template>

<style scoped></style>
