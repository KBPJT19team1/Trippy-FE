<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isModalOpen: String,
});
</script>

<template>
  <div v-if="props.isModalOpen">
    <h3>modal</h3>
  </div>
</template>
