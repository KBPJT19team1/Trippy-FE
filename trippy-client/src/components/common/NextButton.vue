<script setup>
import router from '@/router';
import { computed } from 'vue';

const props = defineProps({
  title: String,
  visible: Boolean,
  to: String,
  onClick: Function,
});
const disabled = computed(() => !props.visible);
const handleClick = () => {
  router.push({ name: props.to })
};
</script>

<template>
  <div class="bg-white w-full">
    <button
      :class="[props.visible === false ? 'bg-gray-400' : 'bg-main-gradient']"
      :disabled="disabled"
      class="text-gray-100 button1 flex justify-center items-center text-center h-12 w-full rounded-xl"
      @click="props.onClick">
      {{ props.title }}
    </button>
  </div>
</template>
