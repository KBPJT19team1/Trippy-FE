export default [
  {
    path: "group-account",
    name: "group-account-intro",
    component: () => import("../views/group-account/CreateIntroView.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "group-account/step1",
    name: "group-account-step1",
    component: () => import("../views/group-account/AgreementStep1View.vue"),
    meta: {
      title: "계모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "group-account/step2",
    name: "group-account-step2",
    component: () => import("../views/group-account/AgreementStep2View.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "group-account/step3",
    name: "group-account-step3",
    component: () => import("../views/group-account/AgreementStep3View.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/step4",
    name: "group-account-step4",
    component: () => import("../views/group-account/AgreementStep4View.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/step5",
    name: "group-account-step5",
    component: () => import("../views/group-account/AgreementStep5View.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/step6",
    name: "group-account-step6",
    component: () => import("../views/group-account/AgreementStep6View.vue"),
    meta: {
      title: "모임계좌 만들가",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/create-complete",
    name: "group-account-create-complete",
    component: () => import("../views/group-account/CreateCompleteView.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
];
