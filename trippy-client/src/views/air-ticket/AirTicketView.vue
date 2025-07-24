<script setup>
import { useAirTicketStore } from "@/stores/airTicketStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import dummyTickets from "@/_dummy/airTicket_dummy.json"; //더미 -> 나중에 삭제하기
import QuickReloadButton from "@/components/common/QuickReloadButton.vue";
import EmptyTicket from "@/components/air-ticket/EmptyTicket.vue";
import TicketList from "@/components/air-ticket/TicketItem.vue";

const store = useAirTicketStore();
const { tickets } = storeToRefs(store);

onMounted(() => {
  store.setTickets(dummyTickets);
});

const onReload = () => {
  console.log(" Reload 버튼 클릭 ");
};
</script>

<template>
  <main class="w-full flex flex-col gap-8">
    <!-- ✅ 항공권 없을 때 -->
    <div v-if="tickets.length === 0" class="mt-[50%] flex justify-center">
      <EmptyTicket />
    </div>

    <!-- ✅ 항공권 있을 때 -->
    <div v-else>
      <TicketList :tickets="tickets" />
    </div>

    <div class="fixed bottom-8 right-5 z-50">
      <QuickReloadButton @reload="onReload" />
    </div>
  </main>
</template>
