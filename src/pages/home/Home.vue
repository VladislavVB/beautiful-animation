<template>
  <!-- <transition name="slide"> -->
  <!-- <div data-aos="fade-right"> -->
  <!-- <Logo />
  <Menu />
  <Contact />
  <div class="d-sm-flex d-none">
    <Case />
  </div>
  <Lang /> -->
  <div class="homePage-wrapper">
    <div class="container-fluid p-0 homePage">
      <div
        class="homePage-title"
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
      >
        <h3>СОРЕМЕННОЕ IT АГЕНСТВО</h3>
        <p>We have developed:</p>
      </div>
      <slideHome />
      <div class="slideHome-progres">
        <div class="slideHome-progres-bar"></div>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- </transition> -->
</template>

<script>
import slideHome from "@/pages/home/components/Slider";
export default {
  transition() {
    return "slide";
  },
  name: "Home",
  components: {
    slideHome,
  },
};
</script>

<style lang="scss" scoped>
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
