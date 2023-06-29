import { createRouter, createWebHistory } from "vue-router";
const VeggieMenuView = () => import("../views/VeggieMenuView.vue");
const OmnivoreMenuView = () => import("../views/OmnivoreMenuView.vue");
const AmplifiedRecipe = () => import("../views/AmplifiedRecipe.vue");

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
        {
            path: "/recipe",
            name: "recipe",
            component: AmplifiedRecipe,
        },
    ],
});

export default router;
