<template>
  <swiper
    :loop="true"
    :delay="4100"
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <router-link to="/">
        <div class="slideHome">
          <div class="slideHome-images">
            <img src="" alt="" />
          </div>
          <p class="slideHome-description">hjjghj</p>
          <h3 class="slideHome-title">fjghjgfjfgjghjfj</h3>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  name: "caseSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
