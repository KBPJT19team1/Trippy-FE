<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  tabs: { type: Array, required: true },
  tab: { type: String, required: false },
});

const emit = defineEmits(["update:tab"]);
</script>

<template>
  <div class="flex w-full bg-white">
    <button
      v-for="tabItem in props.tabs"
      :key="tabItem"
      @click="emit('update:tab', tabItem)"
      :class="[
        'py-2 button1 transition-colors flex-1',
        props.tab === tabItem ? 'text-blue-500 border-b border-blue-500' : 'text-gray-400 border-b border-gray-300',
      ]"
    >
      {{ tabItem }}
    </button>
  </div>
</template>
