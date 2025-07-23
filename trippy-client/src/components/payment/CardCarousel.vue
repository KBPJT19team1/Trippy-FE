<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.png";
import card3 from "@/assets/card3.png";

const cards = [
  { id: 1, image: card1, name: "KB국민카드_트래블러스" },
  { id: 2, image: card2, name: "신한카드_디스커버" },
  { id: 3, image: card3, name: "하나카드_위시올" },
];

const activeIndex = ref(0);

function onSlideChange(swiper) {
  activeIndex.value = swiper.realIndex;
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
          class="flex flex-col items-center transition-all duration-300 ease-in-out transform"
          :class="index === activeIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-50'"
        >
          <img :src="card.image" alt="카드" class="w-[180px] rounded-xl" />
          <p
            v-if="index === activeIndex"
            class="mt-[8px] caption1 text-center transition-opacity duration-300 text-gray-700"
          >
            {{ card.name }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
