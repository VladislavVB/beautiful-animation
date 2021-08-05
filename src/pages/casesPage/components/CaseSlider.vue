<template>
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
      '@0.75': {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      '@1.00': {
        slidesPerView: 1.5,
        spaceBetween: 11,
      },
      '@1.45': {
        slidesPerView: 2,
        spaceBetween: 11,
      },
      '@1.50': {
        slidesPerView: 2.5,
        spaceBetween: 10,
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
    <swiper-slide v-for="item in casesList" :key="item.id">
      <router-link to="/home-detail">
        <div class="casesCard">
          <div class="casesCard-descp">
            <div class="casesCard-images">
              <img
                :src="require(`@/assets/images/home/${item.image}`)"
                alt=""
              />
            </div>
            <div class="casesCard-title">
              <p>{{ item.description }}</p>
              <h3>{{ item.title }}</h3>
            </div>
          </div>
          <div
            :style="{ background: item.background }"
            class="casesCard-circle"
          ></div>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Scrollbar, Mousewheel, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Scrollbar, Mousewheel, Pagination, A11y]);

import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/pagination/pagination.scss";

export default {
  name: "caseSlider",
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
  methods: {
    onSlideChange() {},
  },
};
</script>
