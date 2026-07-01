import { createRouter, createWebHistory } from "vue-router";
import AuthCallbackView from "@/components/views/AuthCallbackView.vue";
import GameJoinView from "@/components/views/GameJoinView.vue";
import ModeratorJoinView from "@/components/views/ModeratorJoinView.vue";
import PrivacyView from "@/components/views/PrivacyView.vue";
import NotFoundView from "@/components/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: GameJoinView },
    { path: '/authCallback', component: AuthCallbackView },
    { path: '/moderator', component: ModeratorJoinView },
    { path: '/privacy', component: PrivacyView },
    { path: '/:catchAll(.*)*', component: NotFoundView }
  ],
})

export default router;
