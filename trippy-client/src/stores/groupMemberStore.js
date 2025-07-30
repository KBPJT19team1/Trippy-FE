import { ref } from "vue";
import { defineStore } from "pinia";
import peopleList from "@/_dummy/peopleList.json";

export const useGroupMemberStore = defineStore("groupMember", () => {
  const groupMember = ref([]);
  const groupMemberError = ref(null);

  const setGroupMember = async () => {
    try {
      groupMember.value = await peopleList;
    } catch {
      groupMemberError.value = "멤버 데이터를 불러오는 데 실패했습니다.";
    }
  };

  return { groupMember, groupMemberError, setGroupMember };
});
