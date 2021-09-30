import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Maska from "maska";
// import AOS from "aos";
// import

//Импорт компонента, который будем использовать как глобальный

import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Case from "./components/Case";
import Lang from "./components/Lang";
import PresentBtn from "./components/PresentationButton";
import CallBtn from "./components/CallBtn";
import Loader from "./components/Loader";
//Обращаемся к методу createApp для создания глобального компонента

const app = createApp(App);
//Пример регистрации глобального компонента

app.component("Logo", Logo);
app.component("Menu", Menu);
app.component("Contact", Contact);
app.component("Case", Case);
app.component("Lang", Lang);
app.component("PresentBtn", PresentBtn);
app.component("CallBtn", CallBtn);
app.component("Loader", Loader);

app.use(store).use(router).use(Maska).mount("#app");