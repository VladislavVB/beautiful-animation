import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Импорт компонента, который будем использовать как глобальный
import BaseIcon from "./components/BaseIcon";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Case from "./components/Case";
import Lang from "./components/Lang";
//Обращаемся к методу createApp для создания глобального компонента
const app = createApp(App);
//Пример регистрации глобального компонента
app.component("BaseIcon", BaseIcon);
app.component("Logo", Logo);
app.component("Menu", Menu);
app.component("Contact", Contact);
app.component("Case", Case);
app.component("Lang", Lang);

app.use(store).use(router).mount("#app");
