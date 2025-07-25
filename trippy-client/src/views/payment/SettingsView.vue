<!-- src/views/payments/PaymentSettingsView.vue -->
<script setup>
import PaymentMethodList from "@/components/payment/CardList.vue";
import KbLogo from "@/assets/svg/card/kb.svg";
import ShinhanLogo from "@/assets/svg/card/shinhan.svg";
import HanaLogo from "@/assets/svg/card/hana.svg";
import WooriLogo from "@/assets/svg/card/kakao.svg";
import TossLogo from "@/assets/svg/card/nh.svg";

const cards = [
  {
    id: 1,
    name: "KB국민카드_트래블러스",
    number: "233*",
    logo: KbLogo,
    bgColor: "#F8B500",
  },
  {
    id: 2,
    name: "신한카드_청년수당 S20",
    number: "233*",
    logo: ShinhanLogo,
    bgColor: "#236FFF",
  },
  {
    id: 3,
    name: "하나카드_트래블로그",
    number: "233*",
    logo: HanaLogo,
    bgColor: "#07A44D",
  },
  {
    id: 4,
    name: "카카오카드",
    number: "233*",
    logo: WooriLogo,
    bgColor: "#CBD0D7",
  },
  {
    id: 5,
    name: "농협카드",
    number: "233*",
    logo: TossLogo,
    bgColor: "#CBD0D7",
  },
];
</script>

<template>
  <div class="w-[375px] mx-auto">
    <div class="settings-title subtitle2">등록한 결제수단</div>
    <PaymentMethodList :cards="cards" />
  </div>
</template>
