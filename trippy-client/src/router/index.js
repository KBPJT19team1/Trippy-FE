import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PaymentView from "@/views/PaymentView.vue";
import TravelLogsView from "@/views/TravelLogsView.vue";
import MenuView from "@/views/MenuView.vue";
import MapView from "@/views/MapView.vue";
import GroupAccount from "./groupAccount.js";
import ExchangeRateListView from "@/views/exchangeRate/ExchangeRateListView.vue";
import ExchangeCurrencySelectView from "@/views/exchangeCurrency/ExchangeCurrencySelectView.vue";
import ExchangeCurrencyAccountView from "@/views/exchangeCurrency/ExchangeCurrencyAccountView.vue";

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
      component: ExchangeRateListView,
    },
    {
      path: "/exchange-currency",
      name: "ExchangeCurrency",
      component: ExchangeCurrencySelectView,
    },
    {
      path: "/exchange-currency-account",
      name: "ExchangeCurrencyAccount",
      component: ExchangeCurrencyAccountView,
    },
    { path: "/map", name: "map", component: MapView },

    ...GroupAccount,
  ],
});

export default router;
