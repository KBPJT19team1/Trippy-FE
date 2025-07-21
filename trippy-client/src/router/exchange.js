import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/exchangeRate",
    name: "ExchangeRate",
    component: () => import("../views/exchangeRate/exchangeRateList.vue"),
  },
  {
    path: "/exchangeCurrency",
    name: "ExchangeCurrency",
    component: () => import("../views/exchangeCurrency/ExchangeCurrency.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// export default [
//   {
//     path: "/group-account",
//     name: "group-account",
//     component: () => import("../views/GroupAccountCreateIntroView.vue"),
//     children: [
//       {
//         path: "/step1",
//         name: "group-account-step1",
//         component: () => import("../views/GroupAccountAgreementStep1View.vue"),
//       },
//     ],
//   },
// ];
