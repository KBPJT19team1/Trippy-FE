<script setup>
import { onMounted, ref } from "vue";
import copyIcon from "@/assets/svg/copy-icon.svg";
import TrippyLogo from "@/assets/svg/trippy-logo.svg";
import NextButton from "@/components/common/NextButton.vue";
import AlertModal from "@/components/common/modals/AlertModal.vue";
import { useGroupAccountStore } from "@/stores/groupAccountStore";
import router from "@/router";

const groupAcountStore = useGroupAccountStore();

const ifcopyModal = ref(false);

const inviteLink = "http://172.30.1.9:5173/invite?token=test123";
const copyInviteLink = async () => {
  try {
    await navigator.clipboard.writeText(inviteLink);
    ifcopyModal.value = true;
  } catch (err) {
    console.error("클립보드 복사 실패:", err);
  }
};

const shareToKakao = () => {
  window.Kakao.Link.sendDefault({
    objectType: "text",
    text: "Trippy에서 모임통장을 만들었어요!",
    link: {
      webUrl: inviteLink,
      mobileWebUrl: inviteLink,
    },
    buttons: [
      {
        title: "지금 참여하기",
        link: {
          webUrl: inviteLink,
          mobileWebUrl: inviteLink,
        },
      },
    ],
  });
};

onMounted(() => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_KAKAO_JS_KEY);
  }

  groupAcountStore.setGroupAccountCreateDate();
});

onMounted(() => {
  groupAcountStore.setGroupAccountCreateDate();
});
</script>

<template>
  <div class="w-full h-full bg-white flex flex-col justify-between">
    <div>
      <TrippyLogo class="w-[24vh] mt-8 mx-auto" />
      <div class="border-b border-gray-300 w-full text-center mt-16 pb-5">
        <h1 class="title1">모임통장 개설완료</h1>
        <p class="body2 mt-2 mb-3 text-gray-500">이제 모임통장에 친구를 초대해보세요.</p>
      </div>
      <div class="flex justify-between w-full px-3 py-5 text-body2 border-b border-gray-300">
        <p>계좌</p>
        <div class="flex flex-col items-end">
          <p>{{ groupAcountStore.groupAccountName }}의 통장</p>
          <p>{{ groupAcountStore.groupAccountNumber }}</p>
        </div>
      </div>
      <div class="flex justify-between w-full px-3 py-5 text-body2 border-b border-gray-300">
        <p>모임통장 개설일</p>
        <div class="flex flex-col items-end">
          <p class="subtitle2">{{ groupAcountStore.groupAccountCreateDate }}</p>
        </div>
      </div>
      <div
        class="mr-4 py-3 subtitle2 flex items-center gap-1 justify-end hover:cursor-pointer"
        @click="copyInviteLink"
      >
        <p>초대링크 복사</p>

        <copyIcon />
      </div>

      <!-- 카카오톡 공유 버튼 (메인 기능) -->
      <div @click="shareToKakao">카카오톡으로 초대하기</div>
    </div>
    <AlertModal
      :title="'초대링크가 복사되었습니다'"
      :model-value="ifcopyModal"
      @click="ifcopyModal = false"
    />

    <NextButton :title="'완료'" @click="router.push({ name: 'home' })" />
  </div>
</template>

<style scoped></style>
