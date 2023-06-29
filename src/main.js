import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import "./assets/scss/main.scss";

const app = createApp(App);

const pinia = createPinia();
pinia.use(
    createPersistedState({
        auto: true,
    })
);

app.use(pinia);
app.use(router);

app.mount("#app");
