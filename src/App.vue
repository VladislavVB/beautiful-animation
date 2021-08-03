<template>
  <Layout />
</template>

<script>
import Layout from "./layouts/Layout";

import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",
  components: {
    Layout,
  },
};

AOS.init({
  once: true,
});
</script>

<style lang="scss">
@import "./assets/styles/style.scss";

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 2.5s ease;
}
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
