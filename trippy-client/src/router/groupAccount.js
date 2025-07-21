export default [
  {
    path: "/group-account",
    name: "group-account",
    component: () => import("../views/GroupAccountCreate.vue"),
    children: [
      {
        path: "",
        name: "group-account-intro",
        component: () => import("../views/GroupAccountCreateIntroView.vue"),
      },
      {
        path: "step1",
        name: "group-account-step1",
        component: () => import("../views/GroupAccountAgreementStep1View.vue"),
      },
      {
        path: "step2",
        name: "group-account-step2",
        component: () => import("../views/GroupAccountAgreementStep2View.vue"),
      },
    ],
  },
];
