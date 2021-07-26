<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/home-detail">home-detail</router-link>
    <router-link to="/about">about</router-link>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- <transition :name="fade">
      <router-view></router-view>
    </transition> -->
  </div>
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
// routes transition animation

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}


</style>
