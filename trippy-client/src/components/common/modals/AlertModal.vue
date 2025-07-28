<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  title: String,
  modelValue: Boolean,
  isSuccess: Boolean,
});

const emit = defineEmits(["update:modelValue", "next"]);

const handleClick = () => {
  // 수행 성공 시
  if (props.isSuccess) {
    emit("update:modelValue", false);
    emit("next");
    return;
  }

  emit("update:modelValue", false);
};
</script>

<template>
  <div
    v-if="props.modelValue"
    class="fixed h-full w-full inset-0 z-50 flex items-center justify-center bg-black/40"
  >
    <div class="w-72 h-40 bg-white rounded-xl flex flex-col justify-between">
      <div class="flex flex-col grow justify-center text-center">
        <h1 class="body1 text-gray-600">{{ props.title }}</h1>
      </div>
      <button
        class="body1 w-full h-11 border-t rounded-b-xl text-white bg-main-gradient"
        @click="handleClick"
      >
        확인
      </button>
    </div>
  </div>
</template>
