<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (e) => {
  const value =
    props.label === "휴대폰 번호" ? e.target.value.replace(/[^0-9]/g, "") : e.target.value;

  emit("update:modelValue", value);
};
</script>

<template>
  <div class="flex flex-col gap-1">
    <p class="body1 text-gray-400">{{ label }}</p>
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="label === '휴대폰 번호' ? 11 : undefined"
      @input="onInput"
      class="w-full h-12 border-[1px] border-gray-300 rounded-xl px-4"
    />
  </div>
</template>
