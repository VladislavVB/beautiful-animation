<template>
  <swiper
    :slides-per-view="3"
    :space-between="0"
    navigation
    :pagination="{
      type: 'fraction',
    }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <div class="casesCard">
        <div class="casesCard-descp">
          <div class="casesCard-images">
            <img src="@/assets/images/home/phoneOne.png" alt="" />
          </div>
          <div class="casesCard-title">
            <p>Mobile application</p>
            <h3>AVATARS</h3>
          </div>
        </div>
        <div class="casesCard-circle"></div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="casesCard">
        <div class="casesCard-images">
          <img src="@/assets/images/home/phoneOne.png" alt="" />
        </div>
        <div class="casesCard-title">
          <p>Mobile application</p>
          <h3>AVATARS</h3>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="casesCard">
        <div class="casesCard-images">
          <img src="@/assets/images/home/phoneOne.png" alt="" />
        </div>
        <div class="casesCard-title">
          <p>Mobile application</p>
          <h3>AVATARS</h3>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="casesCard">
        <div class="casesCard-images">
          <img src="@/assets/images/home/phoneOne.png" alt="" />
        </div>
        <div class="casesCard-title">
          <p>Mobdsdfsfsdfdsfdsfsfffsdfile application</p>
          <h3>AVATARS</h3>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="casesCard">
        <div class="casesCard-images">
          <img src="@/assets/images/home/phoneOne.png" alt="" />
        </div>
        <div class="casesCard-title">
          <p>Mobile application</p>
          <h3>AVATARS</h3>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Scrollbar, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Scrollbar, Pagination, A11y]);

import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/pagination/pagination.scss";

export default {
  name: "caseSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSlideChange() {},
  },
};
</script>
