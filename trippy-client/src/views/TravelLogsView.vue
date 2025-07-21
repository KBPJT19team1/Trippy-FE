<script setup>
import { useRouter } from "vue-router";
import RoundedCard from "@/components/common/RoundedCard.vue";

const router = useRouter();

function goToMap() {
  router.push("/map");
}
</script>

<template>
  <main class="w-full flex justify-center items-center p-4">
    <RoundedCard text="제주 여행" :onClick="goToMap" />
  </main>
</template>
 