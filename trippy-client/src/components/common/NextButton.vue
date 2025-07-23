<script setup>
import router from '@/router';
import { defineEmits } from "vue";

const props = defineProps({
  title: String,
  disabled: Boolean,
  to: String,
  onClick: Function,
});

const emit = defineEmits(['click']);

// const handleClick = () => {
//   router.push({ name: props.to })
// };

function handleClick() {
  emit('click');
}
</script>

<template>
  <div class="bg-white w-full">
    <button
      :class="[props.disabled ? 'bg-gray-400' : 'bg-main-gradient']"
      :disabled="props.disabled"
      class="text-gray-100 button1 flex justify-center items-center text-center h-12 w-full rounded-xl"
      @click="handleClick">
      {{ props.title }}
    </button>
  </div>
</template>
