<script setup>
import { onMounted, ref } from "vue";
import SearchedMember from "@/components/common/inputs/SearchedMember.vue";
import { useGroupMemberStore } from "@/stores/groupMemberStore";

const memberStore = useGroupMemberStore();
const leaderMember = ref("");
const member = ref([]);
const searchedMember = ref("");

onMounted;
</script>

<template>
  <SearchedMember v-model="searchedMember" />

  <div>
    <p>모임주</p>
    <p>{{ leaderMember }}신형만</p>
  </div>

  <div>
    <p>멤버</p>
    <p>{{}}</p>
  </div>
</template>

<style scoped></style>
