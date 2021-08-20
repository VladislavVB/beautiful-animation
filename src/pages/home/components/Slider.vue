<template>
  <div class="homePage-title homePage-title-main">
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
  </div>
  <swiper
    :autoplay="true"
    :loop="true"
    :delay="4100"
    :parallax="true"
    :mousewheel="true"
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in casesList" :key="item.id">
      <router-link @click="goAnimation()" :to="{ name: 'HomeDetail' }">
        <div :style="{ background: item.background }" class="slideHome">
          <div
            data-swiper-parallax="-100"
            data-swiper-parallax-opacity="0.5"
            class="slideHome-images d-flex"
          >
            <img :src="require(`@/assets/images/home/${item.image}`)" alt="" />
          </div>
          <p class="slideHome-description">{{ item.description }}</p>
          <h3 class="slideHome-title">{{ item.title }}</h3>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
  <div class="slideHome-progres">
    <div class="slideHome-progres-bar"></div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Parallax, Mousewheel } from "swiper";
import { getCases } from "@/api/casesList/index.js";
// import {mapActions} from 'vuex';

SwiperCore.use([Autoplay, Mousewheel, Parallax]);

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
        this.cases = data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      })
  },
  computed: {},
  mounted() {
    this.progressLine();
    // this.SET_CASESLIST_TO_STATE();
  },
  methods: {
    // ...mapActions([
    //   'SET_CASESLIST_TO_STATE'
    // ]),
    sendMethod() {},
    // stopNext() {
    //   setTimeout(() => {
    //     this.$router.push({ name: "HomeDetail" });
    //     console.log(1111111111);
    //   }, 1000);
    // },

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
        }, 300);
      }, 3100);
    },
    goAnimation() {
      const HomePageTitle = document.querySelector(".homePage-title-main");
      const SlideHomeProgres = document.querySelector(".slideHome-progres");
      const SlideHomeDescription = document.querySelectorAll(
        ".slideHome-description"
      );
      const SlideHomeTitle = document.querySelectorAll(".slideHome-title");
      const SlideHomeImages = document.querySelectorAll(
        ".slideHome-images img"
      );
      const SidebarMenu = document.querySelector(".sidebar-menu");

      SlideHomeTitle.forEach((elem) => {
        elem.classList.add("animate__animated", "animate__fadeOutDown");
      });
      SlideHomeDescription.forEach((elem) => {
        elem.classList.add("animate__animated", "animate__fadeOutDown");
      });
      SlideHomeImages.forEach((elem) => {
        elem.classList.add("active");
      });
      SlideHomeProgres.classList.add("animate__animated", "animate__fadeOutUp");
      HomePageTitle.classList.add("animate__animated", "animate__fadeOutUp");
      SidebarMenu.classList.add("animate__animated animate__fadeOutTopRight");
    },
    test() {
      this.$emit("gogogo");
    },
  },
};
</script>
