<template>
  <swiper
    :autoplay="true"
    :loop="true"
    :delay="4100"
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in casesList" :key="item.id">
      <router-link to="/home-detail">
        <div :style="{ background: item.background }" class="slideHome">
          <div class="slideHome-images">
            <img :src="require(`@/assets/images/home/${item.image}`)" alt="" />
          </div>
          <p class="slideHome-description">{{ item.description }}</p>
          <h3 class="slideHome-title">{{ item.title }}</h3>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

// Import Swiper styles
import "swiper/swiper.scss";
export default {
  name: "slideHome",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
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
      ],
    };
  },
  mounted() {
    this.progressLine();
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
    progressLine() {
      let slideLine = document.querySelector(".slideHome-progres-bar");
      if (!slideLine) return;
      slideLine.classList.add("active");
      setTimeout(() => {
        slideLine.classList.remove("active");
        setTimeout(() => {
          this.progressLine();
        }, 100);
      }, 4000);
    },
  },
};
</script>
