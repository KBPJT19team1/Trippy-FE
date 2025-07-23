<script setup>
import router from "@/router";
import { computed } from "vue";

const props = defineProps({
  title: String,
  visible: Boolean,
  To: String,
});
const disabled = computed(() => !props.visible);
const handleClick = () => {
  router.push({ name: props.To });
};
</script>

<template>
  <div class="fixed bottom-0 p-4 bg-white pb-8 mb-0">
    <button
      :class="[props.visible === false ? 'bg-gray-400' : 'bg-main-gradient']"
      :disabled="disabled"
      class="text-gray-100 button1 flex justify-center items-center text-center h-12 w-[21.4375rem] rounded-[0.625rem]"
      @click="handleClick"
    >
      {{ props.title }}
    </button>
  </div>
</template>

<style scoped></style>
