import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TabViewLayout from "@/layouts/TabViewLayout.vue";

import HomeView from "@/views/HomeView.vue";
import PaymentView from "@/views/PaymentView.vue";
import TravelLogsView from "@/views/TravelLogsView.vue";
import MenuView from "@/views/MenuView.vue";
import MapView from "@/views/MapView.vue";

import IdCaptureGuideView from "@/views/identification/IdCaptureGuideView.vue";
import IdRegistrationView from "@/views/identification/IdRegistrationView.vue";

import ExchangeRateListView from "@/views/exchange-rate/ExchangeRateListView.vue";
import ExchangeCurrencySelectView from "@/views/exchange-currency/ExchangeCurrencySelectView.vue";

import IDView from "@/views/identification/IdView.vue";
import AirTicketView from "@/views/air-ticket/AirTicketView.vue";

import GroupAccount from "./groupAccount.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // DefaultLayout
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
      path: "/identification",
      name: "identification",
      component: () => import("@/views/identification/IdView.vue"),
    },
    {
      path: "/identification/guide",
      name: "/identification/guide",
      component: () => import("@/views/identification/IdCaptureGuideView.vue"),
    },
    {
      path: "/identification/registration",
      name: "/identification/registration",
      component: () => import("@/views/identification/IdRegistrationView.vue"),
    },
    {
      path: "/tickets",
      name: "AirTicket",
      component: AirTicketView,
    },
    {
      path: "/exchange-rates",
      name: "ExchangeRate",
      component: () => import("../views/exchange-rate/ExchangeRateListView.vue"),
    },
    {
      path: "/exchange-currency",
      name: "ExchangeCurrency",
      component: () => import("../views/exchange-currency/ExchangeCurrencySelectView.vue"),
    },
  ],
});

export default router;
