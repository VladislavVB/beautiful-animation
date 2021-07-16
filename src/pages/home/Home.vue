<template>
  <Logo />
  <Menu />
  <Contact />
  <Case />
  <Lang />
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

    <!-- <div class="container-fluid">
      <div class="homePage-wrapper">
        <div class="homePage-title">
          <h3>СОРЕМЕННОЕ IT АГЕНСТВО</h3>
          <p>We have developed:</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import slideHome from "@/pages/home/components/Slider";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    slideHome,
  },
};
</script>
