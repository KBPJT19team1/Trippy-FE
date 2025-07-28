<script setup>
import { defineProps, defineEmits, onMounted } from "vue";
import OnLoading from "@/components/common/loading/OnLoading.vue";

const props = defineProps({
  description: String,
});

const emit = defineEmits(["next"]);

// (임시) 1.5초 후 다음 페이지로 넘어감
onMounted(() => {
  setTimeout(() => {
    emit("next");
  }, 1500);
});
</script>

<template>
  <div class="flex flex-col h-full items-center justify-center gap-8 pb-2">
    <OnLoading />
    <div class="flex items-center justify-center h-9 bg-gray-500 rounded-full px-12">
      <p class="caption1 text-white">{{ props.description }}</p>
    </div>
  </div>
</template>
