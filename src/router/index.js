import { createRouter, createWebHistory } from "vue-router";
const VeggieMenuView = () => import("../views/VeggieMenuView.vue");
const OmnivoreMenuView = () => import("../views/OmnivoreMenuView.vue");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "omnivore",
            component: OmnivoreMenuView,
        },
        {
            path: "/veggie",
            name: "veggie",
            component: VeggieMenuView,
        },
    ],
});

export default router;
