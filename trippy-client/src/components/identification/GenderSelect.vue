<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  label: { type: String, required: true },
  modelValue: { type: String, required: true }, // "M" 또는 "F"
});
const emit = defineEmits(["update:modelValue"]);

const onChange = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
<template>
  <div class="mb-3 relative">
    <label class="body2 block mb-1">{{ label }}</label>
    <select
      :value="modelValue"
      @change="onChange"
      class="w-full border rounded-md px-3 py-2 text-gray-800 body2 bg-white appearance-none"
    >
      <option value="M">M</option>
      <option value="F">F</option>
    </select>

    <!-- 커스텀 드롭다운 아이콘 -->
    <Icon
      icon="material-symbols:arrow-back-ios-new-rounded"
      class="absolute right-3 top-[55%] text-gray-500 pointer-events-none w-5 h-5 -rotate-90"
    />
  </div>
</template>
