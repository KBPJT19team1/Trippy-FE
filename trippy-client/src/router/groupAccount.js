export default [
  {
    path: "group-account",
    name: "group-account-intro",
    component: () => import("../views/group-account/CreateIntroView.vue"),
  },
  {
    path: "group-account/step1",
    name: "group-account-step1",
    component: () => import("../views/group-account/AgreementStep1View.vue"),
  },
  {
    path: "group-account/step2",
    name: "group-account-step2",
    component: () => import("../views/group-account/AgreementStep2View.vue"),
  },
  {
    path: "group-account/step3",
    name: "group-account-step3",
    component: () => import("../views/group-account/AgreementStep3View.vue"),
  },
  {
    path: "/group-account/step4",
    name: "group-account-step4",
    component: () => import("../views/group-account/AgreementStep4View.vue"),
  },
  {
    path: "/group-account/step5",
    name: "group-account-step5",
    component: () => import("../views/group-account/AgreementStep5View.vue"),
  },
  {
    path: "/group-account/step6",
    name: "group-account-step6",
    component: () => import("../views/group-account/AgreementStep6View.vue"),
  },
  {
    path: "/group-account/create-complete",
    name: "group-account-create-complete",
    component: () => import("../views/group-account/CreateCompleteView.vue"),
  },
];
