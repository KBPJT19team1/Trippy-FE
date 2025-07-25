<script setup>
const props = defineProps({
  leftText: { type: String, default: "다시 촬영" },
  rightText: { type: String, default: "등록하기" },
});
const emit = defineEmits(["leftClick", "rightClick"]);
</script>

<template>
  <div>
    <div class="flex gap-3 mt-4">
      <button
        class="flex-1 py-2 rounded-lg bg-blue-200 text-blue-600 button1 text-center shadow-sm hover:opacity-90"
        @click="emit('leftClick')"
      >
        {{ leftText }}
      </button>
      <button
        class="flex-1 py-3 rounded-lg bg-main-gradient text-white button1 text-center shadow-sm hover:opacity-90"
        @click="emit('rightClick')"
      >
        {{ rightText }}
      </button>
    </div>
  </div>
</template>
