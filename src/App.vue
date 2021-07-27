<template>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",
  components: {},
};

AOS.init({
  once: true,
});
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
</style>

<style lang="scss">
.slide-enter-active {
  transition: all 1.5s ease-in-out;
}
.slide-leave-active {
  transition: all 1.5s ease-in-out;
}
.slide-enter {
  transform: translateY(-100%);
}
.slide-enter-to {
  transform: translateY(0%);
}
.slide-leave {
  transform: translateY(0%);
}
.slide-leave-to {
  transform: translateY(100%);
}
</style>
