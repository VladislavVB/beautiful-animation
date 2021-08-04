<template>
  <div class="homePage-wrapper">
    <div class="container-fluid p-0 homePage">
      <!-- <div class="homePage-title homePage-title-main">
        <div
          class=""
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <h3>СОРЕМЕННОЕ IT АГЕНСТВО</h3>
          <p class="text-center">We have developed:</p>
        </div>
      </div> -->
      <slideHome />

      <!-- <div class="slideHome-progres">
        <div class="slideHome-progres-bar"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
import "@/assets/scriptsJS/homePage.js";
import slideHome from "@/pages/home/components/Slider";
export default {
  // transition() {
  //   return "slide";
  // },
  name: "Home",
  data() {
    return {
      active: false,
    };
  },
  components: {
    slideHome,
  },
  methods: {
    // showGhildAnim() {
    //   console.log(11);
    // },
  },
};
</script>

<style lang="scss" scoped>
// .slide-enter-active {
//   transition: all 1.5s ease-in-out;
// }
// .slide-leave-active {
//   transition: all 1.5s ease-in-out;
// }
// .slide-enter {
//   transform: translateY(-100%);
//   transform: 2s;
// }
// .slide-enter-to {
//   transform: translateY(0%);
//   transform: 2s;
// }
// .slide-leave {
//   transform: translateY(0%);
//   transform: 2s;
// }
// .slide-leave-to {
//   transform: translateY(100%);
//   transform: 2s;
// }
</style>
