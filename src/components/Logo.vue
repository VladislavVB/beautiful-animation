<template>
  <router-link to="/">
    <div
      v-if="
        this.$route.name === 'Home' ||
        this.$route.name === 'HomeDetail' ||
        this.$route.name === 'MenuPage'
      "
      class="sidebar-logo"
      :class="
        width < 1200 && this.$route.name === 'SubmitPage' ? 'recolorWhite' : ''
      "
    >
      GROUP 44
    </div>
    <div
      v-else
      :class="
        width < 1200 && this.$route.name === 'SubmitPage' ? 'recolorWhite' : ''
      "
      class="sidebar-logo active"
    >
      GROUP 44
    </div>
  </router-link>
</template>

<script>
export default {
  name: "logo",
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
