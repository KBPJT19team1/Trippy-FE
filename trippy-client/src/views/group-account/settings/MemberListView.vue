<script setup>
import { computed, onMounted, ref } from "vue";
import SearchedMember from "@/components/common/inputs/SearchedMember.vue";
import { useGroupMemberStore } from "@/stores/groupMemberStore";

const memberStore = useGroupMemberStore();
const leaderMember = ref({});
const members = ref([]);
const searchedMember = ref("");

const filteredMembers = computed(() => {
  if (searchedMember.value.trim() == "") {
    return [];
  }
  return memberStore.groupMembers.filter(
    (member) => member.name && member.name.includes(searchedMember.value),
  );
});

onMounted(async () => {
  await memberStore.setGroupMember();
  leaderMember.value = memberStore.groupMembers.find((m) => m.role === "leader");
  members.value = memberStore.groupMembers.filter((m) => m.role === "member");
});
</script>

<template>
  <div class="h-full w-full">
    <div class="h-12">
      <SearchedMember v-model="searchedMember" />
    </div>

    <div v-if="!searchedMember" class="px-2 mt-5">
      <div class="mb-4">
        <p class="caption1 text-gray-500 mb-1">모임주</p>
        <p class="body2">{{ leaderMember.name }}</p>
      </div>
      <div>
        <p class="caption1 text-gray-500 mb-1">멤버</p>
        <p class="body2 mb-1" v-for="member in members" :key="member.id">{{ member.name }}</p>
      </div>
    </div>

    <div v-else class="px-2 mt-5">
      <p class="body2 mb-1" v-for="member in filteredMembers" :key="member.id">
        {{ member.name }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
