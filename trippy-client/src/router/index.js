import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TabViewLayout from "@/layouts/TabViewLayout.vue";

import HomeView from "@/views/HomeView.vue";
import PaymentView from "@/views/PaymentView.vue";
import TravelLogsView from "@/views/TravelLogsView.vue";
import MenuView from "@/views/MenuView.vue";
import MapView from "@/views/travel-logs/MapView.vue";
import GroupAccount from "./groupAccount.js";

import ImportAccountView from "@/views/personal-accounts/ImportAccountView.vue";
import IdCaptureGuideView from "@/views/identification/IdCaptureGuideView.vue";
import IdRegistrationView from "@/views/identification/IdRegistrationView.vue";
import ExchangeRateListView from "@/views/exchange-rate/ExchangeRateListView.vue";
import ExchangeCurrencySelectView from "@/views/exchange-currency/ExchangeCurrencySelectView.vue";
import IdView from "@/views/identification/IdView.vue";
import AirTicketView from "@/views/air-ticket/AirTicketView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // DefaultLayout
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
          meta: { title: "홈" },
        },
        {
          path: "payment",
          name: "payment",
          component: PaymentView,
          meta: { title: "결제" },
        },
        {
          path: "travel-logs",
          name: "travel-logs",
          component: TravelLogsView,
          meta: { title: "여행 로그" },
        },
        {
          path: "menu",
          name: "menu",
          component: MenuView,
          meta: { title: "메뉴" },
        },
        {
          path: "/personal-accounts/import",
          name: "import-personal-accounts",
          component: ImportAccountView,
          meta: {
            title: "계좌 불러오기",
            bgColor: "white",
          },
        },
        {
          path: "identification/guide",
          name: "identification/guide",
          component: () => import("@/views/identification/resident-card/CaptureGuideView.vue"),
        },
        {
          path: "identification/registration",
          name: "identification/registration",
          component: () => import("@/views/identification/resident-card/RegistrationView.vue"),
        },
        {
          path: "exchange-rate",
          name: "ExchangeRate",
          component: () => import("@/views/exchange-rate/ExchangeRateListView.vue"),
          meta: { title: "환율", bgColor: "white" },
        },
        {
          path: "exchange-currency",
          name: "ExchangeCurrency",
          component: () => import("@/views/exchange-currency/SelectView.vue"),
          meta: { title: "환전", bgColor: "white" },
        },
        {
          path: "exchange-currency-account",
          name: "ExchangeCurrencySelectAccount",
          component: () => import("@/views/exchange-currency/SelectAccountView.vue"),
          meta: { title: "환전", bgColor: "white" },
        },
        {
          path: "exchange-currency-amount",
          name: "ExchangeCurrencyInputAmount",
          component: () => import("@/views/exchange-currency/InputAmountView.vue"),
          meta: { title: "환전", bgColor: "white" },
        },
        {
          path: "map",
          name: "map",
          component: () => import("@/views/MapView.vue"),
        },
        ...GroupAccount,
      ],
    },
    // TabViewLayout (탭 메뉴 사용하는 뷰)
    {
      path: "/check",
      component: TabViewLayout,
      redirect: "/check/identification",
      children: [
        {
          path: "identification",
          name: "identification",
          component: IdView,
          meta: { tabs: ["주민등록", "여권"] },
        },
        {
          path: "tickets",
          name: "AirTicket",
          component: () => import("@/views/air-ticket/AirTicketView.vue"),
        },
      ],
    },
  ],
});

export default router;
