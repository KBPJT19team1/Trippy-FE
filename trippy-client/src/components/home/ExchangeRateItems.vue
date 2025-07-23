<script setup>
const exchangeRateItems = [
  {
    country: "일본",
    countryEng: "JPY",
    amount: 936.4,
  },
  {
    country: "미국",
    countryEng: "USD",
    amount: 1608.1,
  },
  {
    country: "유럽",
    countryEng: "EUR",
    amount: 1374.5,
  },
];
</script>

<template>
  <div v-for="(item, index) in exchangeRateItems" :key="index" class="w-full">
    <div class="w-full h-28 bg-white rounded-xl flex flex-col justify-center gap-1.5 p-4">
      <!-- 국기 API 연동 후 img 태그로 바꿀 것 -->
      <div class="bg-gray-300 w-10 h-6 rounded-md"></div>
      <div class="flex gap-2">
        <p class="body2">{{ item.country }}</p>
        <p class="body2 text-gray-400">{{ item.countryEng }}</p>
      </div>
      <p class="subtitle2">{{ item.amount }}원</p>
    </div>
  </div>
</template>
