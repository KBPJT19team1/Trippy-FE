<script setup>
import { RouterLink, useRoute } from "vue-router";
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import PayIcon from "@/assets/svg/payment-icon.svg";
import LogIcon from "@/assets/svg/log-icon.svg";

const route = useRoute();
const hiddenPrefixes = ["/group-account"];
const isHidden = computed(() => hiddenPrefixes.some((prefix) => route.path.startsWith(prefix)));
</script>

<template>
  <div
    v-if="!isHidden"
    class="bg-white h-[90px] w-full absolute fixed bottom-0 flex justify-center"
  >
    <div class="h-[56px] mb-[34px] flex align-center items-center gap-14">
      <RouterLink to="/">
        <div class="text-gray-400 flex flex-col items-center hover:text-gray-600">
          <Icon icon="material-symbols:home-rounded" class="w-[28px] h-auto" />
          <p class="caption3">홈</p>
        </div>
      </RouterLink>

      <RouterLink to="/payment">
        <div class="text-gray-400 flex flex-col items-center hover:text-gray-600">
          <PayIcon class="w-[28px] h-auto" />
          <p class="caption3">결제</p>
        </div>
      </RouterLink>

      <RouterLink to="/travel-logs">
        <div class="text-gray-400 flex flex-col items-center hover:text-gray-600">
          <LogIcon class="w-[28px] h-auto" />
          <p class="caption3">여행로그</p>
        </div>
      </RouterLink>

      <RouterLink to="/menu">
        <div class="text-gray-400 flex flex-col items-center hover:text-gray-600">
          <Icon icon="material-symbols:menu-rounded" class="w-[28px] h-auto" />
          <p class="caption3">메뉴</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
