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
      meta: { title: '홈' },
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView,
      meta: { title: '결제' },
    },
    {
      path: '/travel-logs',
      name: 'travel-logs',
      component: TravelLogsView,
      meta: { title: '여행 로그' },
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
      meta: { title: '메뉴' },
    },
  ],
});

export default router;
