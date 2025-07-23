<script setup>
import { Icon } from '@iconify/vue';
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: Boolean
});
const emit = defineEmits(['update:modelValue']);

const isOpen = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
  isOpen.value = val
});

const closeModal = () => {
  emit('update:modelValue', false)
};

const data = [
  {
    title: "PASS 이용동의",
    required: true,
    contents: [
      "서비스 이용약관 (필수)",
      "개인정보 수집/이용 동의 (필수)",
      "본인 인증 서비스 이용약관 (필수)"
    ],
  },
  {
    title: "PASS 이용동의",
    required: false,
    contents: [
      "혜택 제공을 위한 개인정보 수집/이용 동의 (선택)",
      "광고성 정보 수신 동의 (선택)",
      "추천 서비스 이용동의 (선택)"
    ],
  },
];
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-end justify-center bg-black/40"
    @click.self="closeModal"
  >
    <div
      class="w-full max-w-[375px] rounded-t-2xl bg-white transition-transform duration-300"
      :class="{
        'translate-y-0': isOpen,
        'translate-y-full': !isOpen,
      }"
      style="max-height: 80vh"
    >
      <div class="py-4 overflow-y-auto max-h-[calc(80vh-56px)] flex flex-col gap-4">
        <p class="px-4 body2 text-gray-400">회원가입을 위한 동의가 필요합니다.</p>
        <div class="flex gap-2 px-4">
          <Icon icon="material-symbols:check-circle-outline-rounded" class="size-6 text-gray-400"/>
          <div>
            <div class="flex gap-1">
              <h3 class="title3">전체 동의</h3>
              <h3 class="title3 text-blue-400">(선택 포함)</h3>
            </div>
            <p class="caption1 text-gray-400">선택 항목에 대한 동의를 거부하시는 경우에도<br/>서비스는 이용이 가능합니다.</p>
          </div>
        </div>

        <div>
          <div v-for="(item, index) in data">
            <div class="flex justify-between h-10 px-4">
              <div class="flex gap-2 items-center">
                <Icon icon="iconamoon:check-duotone" class="size-4 text-gray-400" />
                <p class="body2">{{ item.title }}</p>
                <p class="body2 text-blue-400">{{ item.required ? '(필수)' : '(선택)' }}</p>
              </div>
              <Icon icon="material-symbols:arrow-back-ios-new-rounded" class="size-5 text-gray-400 rotate-90" />
            </div>

            <div
              v-for="content in item.contents"
              class="flex justify-between items-center bg-gray-100 h-10 px-4">
              <div class="flex gap-2">
                <Icon icon="iconamoon:check-duotone" class="size-4 text-gray-400" />
                <p class="caption1">{{ content }}</p>
              </div>
              <Icon icon="material-symbols:arrow-back-ios-new-rounded" class="size-4 text-gray-400 rotate-180" />
            </div>
          </div>
        </div>

      </div>
      <button
        class="w-full py-3 text-center bg-gray-100 text-sm text-gray-600 border-t"
        @click="close"
      >
        닫기
      </button>
    </div>
  </div>
</template>
