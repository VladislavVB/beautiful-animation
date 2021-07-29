<template>
  <!-- <router-link to="/">Home</router-link>
  <router-link to="/about">about</router-link> -->
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
