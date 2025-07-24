export default [
  {
    path: "/group-account",
    name: "group-account-intro",
    component: () => import("../views/group-account/GroupAccountCreateIntroView.vue"),
  },
  {
    path: "/group-account/step1",
    name: "group-account-step1",
    component: () => import("../views/group-account/GroupAccountAgreementStep1View.vue"),
  },
  {
    path: "/group-account/step2",
    name: "group-account-step2",
    component: () => import("../views/group-account/GroupAccountAgreementStep2View.vue"),
  },
];
