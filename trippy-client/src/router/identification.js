export default [
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
    path: "passport/guide",
    name: "passport/guide",
    meta: {
      title: "여권 촬영",
      bgColor: "white",
    },
    component: () => import("@/views/identification/passport/CaptureGuideView.vue"),
  },
];
