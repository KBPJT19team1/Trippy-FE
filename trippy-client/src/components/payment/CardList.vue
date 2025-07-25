<script setup>
import PaymentMethodItem from "./CardListItem.vue";

const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col gap-0 w-full">
    <PaymentMethodItem v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>
