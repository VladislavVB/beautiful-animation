<template>
  <div
    v-if="
      this.$route.name === 'Home' ||
      this.$route.name === 'Contact' ||
      this.$route.name === 'SubmitPage'
    "
    :class="
      width < 1200 && this.$route.name === 'HomeDetail'
        ? 'recolorWhite'
        : '' || (width < 992 && this.$route.name === 'SubmitPage')
        ? 'active'
        : ''
    "
    class="sidebar-lang pHomeDetail"
  >
    <div class="sidebar-contact-item">EN</div>
  </div>
  <div
    v-else
    :class="
      width < 1200 && this.$route.name === 'HomeDetail'
        ? 'recolorWhite'
        : '' || (width < 576 && this.$route.name === 'HomeDetail')
        ? 'active'
        : ''
    "
    class="sidebar-lang pHomeDetail active"
  >
    <div class="sidebar-contact-item">EN</div>
  </div>
</template>

<script>
export default {
  name: "lang",
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
