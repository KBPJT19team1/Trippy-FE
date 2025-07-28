<script setup>
defineProps({
  modelValue: { type: Boolean, default: false }, // v-model 값 (on/off)
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <!-- 실제 체크박스는 숨기고 v-model로 값 연결 -->
    <input
      type="checkbox"
      class="sr-only"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />

    <!-- 토글 바 -->
    <div class="w-14 h-6 bg-black rounded-full relative transition-colors duration-300">
      <!-- 토글 손잡이 (흰색 동그라미) -->
      <div
        class="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform duration-300"
        :class="{ 'translate-x-8': modelValue }"
      ></div>
    </div>
  </label>
</template>
