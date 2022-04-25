import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import {registerComponents} from "./components";
import {createPinia} from "pinia";

const app = createApp(App).use(createPinia()).use(router);

registerComponents(app);

app.mount('#app');
