<script setup>
import { useAirTicketStore } from "@/stores/airTicketStore";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import dummyTickets from "@/_dummy/airTicket_dummy.json"; //더미 -> 나중에 삭제하기
import QuickReloadButton from "@/components/common/QuickReloadButton.vue";
import LoadingOverlay from "@/components/common/LoadingOverlay.vue";
import EmptyTicket from "@/components/air-ticket/EmptyTicket.vue";
import TicketCard from "@/components/air-ticket/TicketItem.vue";

const store = useAirTicketStore();
const { tickets } = storeToRefs(store);
const isLoading = ref(false);

onMounted(() => {
  store.setTickets(dummyTickets);
});

const onReload = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>

<template>
  <main class="w-full flex flex-col gap-8">
    <!-- 로딩 블러 오버레이 -->
    <LoadingOverlay v-if="isLoading" message="예약한 항공권을 불러오고 있습니다." />

    <!-- 항공권 없을 때 -->
    <div v-if="tickets.length === 0" class="mt-[50%] flex justify-center">
      <EmptyTicket />
    </div>

    <!-- 항공권 있을 때 -->
    <div v-else class="flex flex-col gap-4">
      <TicketCard v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" />
    </div>

    <!-- 하단 퀵 버튼 => ❌애 문제 있음 -->
    <div class="fixed bottom-7 ml-48 z-50">
      <QuickReloadButton @reload="onReload" />
    </div>
  </main>
</template>
