<template>
  <div class="casesPage">
    <div class="casesPage-head">
      <h2>Кейсы</h2>
    </div>
    <swiper
      :slides-per-view="3"
      :spaceBetween="10"
      navigation
      :mousewheel="true"
      :pagination="{
        type: 'fraction',
      }"
      :breakpoints="{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '@0.85': {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        '@1.20': {
          slidesPerView: 2,
          spaceBetween: 11,
        },
        '@1.45': {
          slidesPerView: 2.5,
          spaceBetween: 11,
        },
        '@1.90': {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in cases" :key="item.id">
        <router-link
          @click="goAnimation()"
          :to="{ name: 'HomeDetail', params: { id: item.id } }"
        >
          <div
            @click="toggleFaq(item.id)"
            class="casesCard"
            :class="isActive === item.id ? 'active' : null"
          >
            <div class="casesCard-descp">
              <div class="casesCard-images">
                <img
                  :src="`http://axas.api.sector.show/storage/${item.main_image}`"
                  alt=""
                />
              </div>
              <div class="casesCard-title">
                <p>{{ item.description }}</p>
                <h3>{{ item.title }}</h3>
              </div>
            </div>
            <div
              :style="{ background: item.color }"
              class="casesCard-circle"
            ></div>
          </div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
  <!-- <div class="casesCard-goImage">
    <img class="" src="@/assets/images/home/phoneOne.png" alt="" />
  </div> -->
</template>

<script>
import SwiperCore, { Scrollbar, Mousewheel, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Scrollbar, Mousewheel, Pagination, A11y]);

import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/pagination/pagination.scss";
import { getCases } from "@/api/casesList/index.js";

export default {
  name: "caseSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      cases: {},
      isActive: false,
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
          background: "linear-gradient(287.56deg, #3B3B3B 0%, #848484 100%)",
          // gif: "",
          image: "phoneOne.png",
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

  computed: {},
  methods: {
    toggleFaq(ddd) {
      this.isActive = ddd;
      const casesPageHead = document.querySelector(".casesPage-head");
      const casesPage = document.querySelector(".casesPage");
      casesPage.classList.add("active");

      const SwiperScrollbar = document.querySelector(".swiper-scrollbar");
      const SwiperNumber = document.querySelector(
        ".casesPage .swiper-container .swiper-pagination"
      );
      const CasesCardTitle = document.querySelectorAll(".casesCard-title p");
      const CaseTitlte = document.querySelectorAll(
        ".casesCard-title h3, .casesCard-title .h3"
      );
      const CasesCardImagesImg = document.querySelectorAll(
        ".casesCard-images img"
      );
      const CasesCardGoImageImg = document.querySelector(
        ".casesCard-goImage img"
      );
      setTimeout(() => {
        casesPageHead.classList.add("active");
        SwiperScrollbar.classList.add(
          "animate__animated",
          "animate__fadeOutUp"
        );
        SwiperNumber.classList.add("animate__animated", "animate__fadeOutUp");
        CaseTitlte.forEach((elem) => {
          elem.classList.add("animate__animated", "animate__fadeOutUp");
        });
        CasesCardTitle.forEach((elem) => {
          elem.classList.add("animate__animated", "animate__fadeOutUp");
        });
        CasesCardImagesImg.forEach((elem) => {
          elem.classList.add("active");
        });
      }, 1000);
      setTimeout(() => {
        CasesCardGoImageImg.classList.add(
          "animate__animated",
          "animate__backInUp",
          "active"
        );
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
