<script setup>
import MemberSettings from "@/components/group-account/MemberSettings.vue";
import OwnerSettings from "@/components/group-account/OwnerSettings.vue";
import { ref } from "vue";

const isOwner = ref(true);
</script>

<template>
  <OwnerSettings v-if="isOwner" />
  <MemberSettings v-else />
</template>

<style scoped></style>
