<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.png";
import card3 from "@/assets/card3.png";
import plusCard from "@/assets/empty_card.png"; // + 카드

const router = useRouter();

const cards = [
  { id: 1, image: card1, name: "KB국민카드_트래블러스" },
  { id: 2, image: card2, name: "신한카드_디스커버" },
  { id: 3, image: card3, name: "하나카드_위시올" },
  { id: 999, image: plusCard, name: "카드 추가", isAddCard: true },
];

const activeIndex = ref(0);

function onSlideChange(swiper) {
  activeIndex.value = swiper.realIndex;
}

function goToAddCard() {
  router.push("/payment/add");
}
</script>

<template>
  <div class="mt-[157px] w-full">
    <Swiper
      :slides-per-view="1.8"
      :centered-slides="true"
      :space-between="10"
      class="w-full"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(card, index) in cards" :key="card.id" class="flex justify-center">
        <div
          class="flex flex-col items-center transition-all duration-300 ease-in-out transform cursor-pointer"
          :class="index === activeIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-50'"
          @click="card.isAddCard ? goToAddCard() : null"
        >
          <img :src="card.image" alt="카드" class="w-[180px] rounded-xl" />
          <p
            v-if="index === activeIndex && !card.isAddCard"
            class="mt-[8px] caption1 text-center transition-opacity duration-300 text-gray-700"
          >
            {{ card.name }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
