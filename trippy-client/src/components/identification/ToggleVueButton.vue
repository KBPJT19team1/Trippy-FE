<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false }, // 현재 상태 (true = 상세정보, false = QR)
  detailText: { type: String, default: "" },
  qrText: { type: String, default: "" },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <button
      class="bg-main-gradient w-full py-3 rounded-b-lg shadow-md text-white font-bold text-center hover:opacity-90"
      @click="emit('update:modelValue', !modelValue)"
    >
      {{ modelValue ? qrText : detailText }}
    </button>
  </div>
</template>
