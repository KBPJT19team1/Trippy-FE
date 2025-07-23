<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed } from "vue";

import { Icon } from "@iconify/vue";
import TrippyLogo from "@/assets/svg/trippy-logo.svg";

const route = useRoute();

const pageTitle = computed(() => route.meta.title || "");
</script>

<template>
  <div class="bg-white h-[100px] w-full absolute fixed top-0">
    <div
      v-if="pageTitle === '홈'"
      class="h-[56px] px-4 mt-11 flex align-center items-center justify-between"
    >
      <TrippyLogo class="w-[62px] h-auto" />
      <RouterLink to="/notifications">
        <div class="text-gray-400 flex flex-col items-center hover:text-gray-600">
          <Icon icon="material-symbols:notifications-rounded" class="w-[28px] h-auto" />
        </div>
      </RouterLink>
    </div>

    <div
      v-if="pageTitle !== '홈'"
      class="h-[56px] mt-11 flex items-center justify-between relative"
    >
      <RouterLink to="/" class="ml-4">
        <Icon icon="material-symbols:arrow-back-ios-rounded" class="w-6 h-6 hover:text-gray-500" />
      </RouterLink>
      <h3 class="subtitle1 absolute left-1/2 -translate-x-1/2">{{ pageTitle }}</h3>
    </div>
  </div>
</template>
