import { createRouter, createWebHistory } from 'vue-router';
import Ciutats from '@/components/Ciutats.vue';
import Provincies from '@/components/Provincies.vue';
import Paisos from '@/components/Paisos.vue';
import Franquicies from '@/components/Franquicies.vue';

const routes = [
  { path: '/', component: Ciutats },
  { path: '/provincies', component: Provincies },
  { path: '/paisos', component: Paisos },
  { path: '/franquicies', component: Franquicies },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
