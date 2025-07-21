<template>
  <div class="flex w-full border-b bg-white">
    <button
      v-for="tabItem in tabs"
      :key="tabItem"
      @click="$emit('update:tab', tabItem)"
      :class="[
        'py-2 text-base font-medium transition-colors flex-1',
        tab === tabItem ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400',
      ]"
    >
      {{ tabItem }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tabs: { type: Array, required: true },
  tab: { type: String, required: true },
});

defineEmits(["update:tab"]);
</script>
