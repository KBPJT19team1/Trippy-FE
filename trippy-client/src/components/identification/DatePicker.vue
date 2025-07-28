<script setup>
import { ref, watch } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { Icon } from "@iconify/vue";

const props = defineProps({
  label: { type: String, required: true },
  modelValue: { type: String, required: true }, // YYYY-MM-DD 형식
});

const emit = defineEmits(["update:modelValue"]);

// 로컬 상태
const localDate = ref(props.modelValue);

// 부모 값이 바뀌면 동기화
watch(
  () => props.modelValue,
  (newVal) => {
    localDate.value = newVal;
  },
);

// 날짜 선택 시 부모로 전달 (YYYY-MM-DD 포맷으로 변환)
const updateDate = (val) => {
  if (!val) {
    localDate.value = "";
    emit("update:modelValue", "");
    return;
  }
  const date = new Date(val);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const formatted = `${y}-${m}-${d}`;

  localDate.value = formatted;
  emit("update:modelValue", formatted);
};
</script>

<template>
  <div class="mb-3 relative">
    <label class="body2 block mb-1 relative z-10">{{ label }}</label>
    <VueDatePicker
      v-model="localDate"
      :enable-time-picker="false"
      format="yyyy.MM.dd"
      @update:model-value="updateDate"
      placeholder="날짜 선택"
      auto-apply
      :hide-input-icon="true"
      :clearable="false"
      class="w-full"
    />
    <!-- 오른쪽 아이콘 -->
    <Icon
      icon="material-symbols:calendar-today-rounded"
      class="absolute right-3 top-8 w-5 h-5 text-gray-500 pointer-events-none"
    />
  </div>
</template>
