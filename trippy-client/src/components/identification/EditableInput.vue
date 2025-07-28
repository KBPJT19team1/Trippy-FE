<script setup>
import { ref } from "vue";

const props = defineProps({
  label: { type: String, required: true },
  modelValue: { type: String, required: true },
  readonly: { type: Boolean, default: true },
  formatter: { type: Function, default: null },
});

const emit = defineEmits(["update:modelValue", "toggleEdit"]);
</script>

<template>
  <div class="mb-3">
    <div class="mb-1">
      <label class="body2">{{ label }}</label>
    </div>

    <div class="flex items-center justify-between border rounded-md px-3 py-2">
      <input
        type="text"
        class="text-gray-800 body2"
        :value="modelValue"
        :readonly="readonly"
        @input="
          (e) => emit('update:modelValue', formatter ? formatter(e.target.value) : e.target.value)
        "
      />

      <button class="text-gray-400 body2" @click="emit('toggleEdit')">
        {{ readonly ? "수정" : "완료" }}
      </button>
    </div>
  </div>
</template>
