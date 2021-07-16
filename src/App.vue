<template>
  <div id="app">
    <router-view></router-view>
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
