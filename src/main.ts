import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { registerComponents } from "./components";

const app = createApp(App).use(router);
registerComponents(app);

app.mount("#app");
