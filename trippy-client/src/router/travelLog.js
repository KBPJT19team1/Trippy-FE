export default [
  {
    path: "new-log",
    name: "NewLog",
    component: () => import("@/views/travel-logs/NewLog.vue"),
  },
  {
    path: "map",
    name: "map",
    component: () => import("@/views/travel-logs/MapView.vue"),
  },
];
