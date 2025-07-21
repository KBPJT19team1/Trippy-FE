import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PaymentView from '@/views/PaymentView.vue';
import TravelLogsView from '@/views/TravelLogsView.vue';
import MenuView from '@/views/MenuView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView,
    },
    {
      path: '/travel-logs',
      name: 'travel-logs',
      component: TravelLogsView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
    },
  ],
});

export default router;
