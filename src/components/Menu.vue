<template>
  <router-link to="/menu-page">
    <div
      v-if="
        this.$route.name === 'Home' ||
        this.$route.name === 'Contact' ||
        this.$route.name === 'SubmitPage'
      "
      :class="
        (width < 1200 && this.$route.name === 'HomeDetail'
          ? 'recolorWhite'
          : '') ||
        (width < 1200 && this.$route.name === 'MenuPage')
          ? 'recolorWhite'
          : '' || (width < 1200 && this.$route.name === 'MenuPage')
          ? 'recolorWhite'
          : ''
      "
      class="sidebar-menu pHomeDetail"
    >
      <span class="sidebar-menu-one"></span>
      <span class="sidebar-menu-two"></span>
      <span class="sidebar-menu-three"></span>
    </div>
    <div
      v-else
      :class="
        (width < 1200 && this.$route.name === 'HomeDetail'
          ? 'recolorWhite'
          : '') ||
        (width < 1200 && this.$route.name === 'MenuPage')
          ? 'recolorWhite'
          : ''
      "
      class="sidebar-menu pHomeDetail active"
    >
      <span class="sidebar-menu-one"></span>
      <span class="sidebar-menu-two"></span>
      <span class="sidebar-menu-three"></span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      width: "0",
    };
  },
  mounted() {
    window.addEventListener("resize", this.handlresize);
    this.handlresize();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handlresize);
  },
  methods: {
    handlresize() {
      this.width = window.innerWidth;
    },
  },
};
</script>

//
<style lang="scss">
// #app {
//   overflow: hidden;
// }
//
</style>
