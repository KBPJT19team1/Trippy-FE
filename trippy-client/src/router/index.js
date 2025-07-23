import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PaymentView from "@/views/PaymentView.vue";
import TravelLogsView from "@/views/TravelLogsView.vue";
import MenuView from "@/views/MenuView.vue";
import MapView from "@/views/MapView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/payment",
      name: "payment",
      component: PaymentView,
    },
    {
      path: "/travel-logs",
      name: "travel-logs",
      component: TravelLogsView,
    },
    {
      path: "/menu",
      name: "menu",
      component: MenuView,
    },
    {
      path: "/exchange-rates",
      name: "ExchangeRate",
      component: () => import("../views/exchangeRate/ExchangeRateList.vue"),
    },
    {
      path: "/exchange-currency",
      name: "ExchangeCurrency",
      component: () => import("../views/exchangeCurrency/ExchangeCurrencySelect.vue"),
    },
    { path: "/map", name: "map", component: MapView },
  ],
});

export default router;
