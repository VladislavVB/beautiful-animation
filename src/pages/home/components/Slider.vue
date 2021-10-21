<template>
  <div :class="{'animate__animated': isAnimated, 'animate__fadeOutUp': isFadeOutUp }" class="homePage-title homePage-title-main">
    <div
      class=""
      data-aos="fade-down"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
    >
      <h3>СОВРЕМЕННОЕ IT АГЕНСТВО</h3>
      <p class="text-center">We have developed:</p>
    </div>
  </div>
  <swiper
    :pagination="{
      type: 'progressbar',
    }"
    :navigation="true"
    :autoplay="true"
    :autoplayDisableOnInteraction="false"
    :loop="true"
    :delay="4100"
    :speed="1000"
    :parallax="true"
    :mousewheel="true"
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="casr in cases" :key="casr.id">
      <router-link
        @click="goAnimation()"
        :to="{ name: 'HomeDetail', params: { id: casr.id } }"
      >
        <div :style="{ background: casr.color }" class="slideHome">
          <div
            data-swiper-parallax="-100"
            data-swiper-parallax-opacity="0.5"
            class="slideHome-images d-flex"
          >
            <div :class="{'animate__animated': isAnimated, 'animate__fadeOutDown': isFadeOutDown }" class="slideHome-gif">
              <img
                :src="`http://axas.api.sector.show/storage/${casr.gif}`"
                alt=""
              />
            </div>
            <img
              :src="`http://axas.api.sector.show/storage/${casr.main_image}`"
              alt=""
              :class="{ active: isActive }"
            />
          </div>
          <div class="slideHome-description-wrapper">
            <p :class="{'animate__animated': isAnimated, 'animate__fadeOutDown': isFadeOutDown }" class="slideHome-description">{{ casr.description }}</p>
            <h3 :class="{'animate__animated': isAnimated, 'animate__fadeOutDown': isFadeOutDown }" class="slideHome-title">{{ casr.title }}</h3>
          </div>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  Autoplay,
  Parallax,
  Mousewheel,
  Pagination,
  Navigation,
} from "swiper";

import { getCases } from "@/api/casesList/index.js";
SwiperCore.use([Autoplay, Mousewheel, Parallax, Pagination, Navigation]);

import "swiper/swiper.scss";
export default {
  name: "slideHome",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    casr: Object,
  },
  data() {
    return {
      isActive: false,
      isAnimated: false,
      isFadeOutUp: false,
      isFadeOutDown: false,
      cases: {},
      casesList: [
        {
          id: 1,
          // link: 1,
          background: "linear-gradient(287.56deg, #3B3B3B 0%, #848484 100%)",
          // gif: "",
          image: "phoneOne.png",
          title: "AVATARS",
          description: "Mobile application",
        },
        {
          id: 2,
          // link: 1,
          background: "linear-gradient(287.56deg, #8A8FFD 0%, #C1D6FF 100%)",
          // gif: "",
          image: "phoneTwo.png",
          title: "CheckSkin",
          description: "Mobile application2",
        },
        {
          id: 3,
          // link: 1,
          background: "linear-gradient(287.56deg, #CC000D 0%, #FF7780 100%)",
          // gif: "",
          image: "phoneThree.png",
          title: "KazakPay",
          description: "Mobile application3",
        },
        {
          id: 4,
          // link: 1,
          background: "linear-gradient(287.56deg, #7965FF 0%, #DBD6FF 100%)",
          // gif: "",
          image: "phoneTwo.png",
          title: "CheckSkin",
          description: "Mobile application2",
        },
        {
          id: 5,
          // link: 1,
          background: "linear-gradient(287.56deg, #31313A 0%, #6B6B75 100%)",
          // gif: "",
          image: "phoneThree.png",
          title: "KazakPay",
          description: "Mobile application3",
        },
        {
          id: 6,
          // link: 1,
          background: "linear-gradient(287.56deg, #21B7E7 0%, #7EE3EA 100%)",
          // gif: "",
          image: "phoneTwo.png",
          title: "CheckSkin",
          description: "Mobile application2",
        },
        {
          id: 7,
          // link: 1,
          background: "linear-gradient(287.56deg, #A21A63 0%, #FF6AA8 100%)",
          // gif: "",
          image: "phoneThree.png",
          title: "KazakPay",
          description: "Mobile application3",
        },
      ],
    };
  },
  created() {
    getCases()
      .then(({ data }) => {
        this.cases = data.data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
  methods: {
    goAnimation() {
      this.isActive = true;
      this.isAnimated = true;
      this.isFadeOutUp = true;
      this.isFadeOutDown = true;
    },
  },
};
</script>
