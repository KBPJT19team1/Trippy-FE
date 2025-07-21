<template>
  <div class="w-full">
    <TabMenu :tabs="['주민등록', '여권']" v-model:tab="currentTab" />
    <div v-if="currentTab === '주민등록'" />
    <div v-if="currentTab === '여권'" />
  </div>
</template>

<script setup>
import TabMenu from "@/components/TabMenu.vue";

import { ref } from "vue";
const currentTab = ref("주민등록");
</script>
