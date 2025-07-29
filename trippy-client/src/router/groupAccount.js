import { title } from "vue-carousel-3d";

export default [
  {
    path: "/group-account/create",
    name: "group-account-create",
    component: () => import("../views/group-account/create-account/CreateIntroView.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/create/step1",
    name: "group-account-create-step1",
    component: () => import("../views/group-account/create-account/AgreementStep1View.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/create/step2",
    name: "group-account-create-step2",
    component: () => import("../views/group-account/create-account/AgreementStep2View.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/create/step3",
    name: "group-account-create-step3",
    component: () => import("../views/group-account/create-account/AgreementStep3View.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/create/step4",
    name: "group-account-create-step4",
    component: () => import("../views/group-account/create-account/AgreementStep4View.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/create/step5",
    name: "group-account-create-step5",
    component: () => import("../views/group-account/create-account/AgreementStep5View.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/create/step6",
    name: "group-account-create-step6",
    component: () => import("../views/group-account/create-account/AgreementStep6View.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/create/complete",
    name: "group-account-create-complete",
    component: () => import("../views/group-account/create-account/CreateCompleteView.vue"),
    meta: {
      title: "모임계좌 만들기",
      bgColor: "white",
    },
  },
  {
    path: "/group-account/settings/:accountId",
    name: "group-account-settings",
    componet: () => import("@/views/group-account/settings/GroupAccountSettingsWrapper.vue"),
    meta: {
      title: "계좌 설정",
      bgColor: "white",
    },
  },
];
