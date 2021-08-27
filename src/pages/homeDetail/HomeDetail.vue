<template>
  <div @scroll="changeColors()" class="homeDetail-wrapper">
    <div class="homeDetail">
      <div :style="{ background: event.color }" class="homeDetail-left active">
        <div class="homeDetail-up-title">
          <h3>СОРЕМЕННОЕ IT АГЕНСТВО</h3>
          <p>We have developed:</p>
        </div>
        <!-- <router-link class="" to="/"> -->
        <div @click="goBack" class="homeDetail-left-back hide">
          <img src="@/assets/images/icon/back.png" alt="" />
        </div>
        <!-- </router-link> -->
        <div class="homeDetail-body">
          <div class="slideHome-images">
            <img
              class="active"
              :src="`http://axas.api.sector.show/storage/${event.main_image}`"
              alt=""
            />
          </div>
          <div>
            <p class="hide slideHome-description">{{ event.description }}</p>
            <h3 class="hide slideHome-title">{{ event.title }}</h3>
            <a :href="`#downDetail`" class="homeDetail-body-down">
              <p>Листайте вниз, чтобы увидеть описание проекта</p>
              <div
                class="
                  arrow
                  animate__animated
                  animate__pulse
                  animate__delay-2s
                  animate__infinite
                  infinite
                "
              >
                <img src="@/assets/images/homeDetail/arrowDown.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div :id="`downDetail`" class="homeDetail-right active">
        <div class="homeDetail-right-body">
          <h2>{{ event.title }}</h2>
          <p class="mb-5 sm-mb-1">
            Разработка современного мобильного приложения
          </p>

          <p class="paragraph-title">lorem</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae
            massa sollicitudin sed. Sapien in pellentesque nascetur purus
            ultrices rhoncus maecenas nibh ultricies. Egestas quis quis urna,
            sagittis nam. Morbi risus rhoncus commodo pharetra, penatibus
            ullamcorper scelerisque.
          </p>
          <div class="paragraph-section">
            <div class="paragraph-item">
              <p class="paragraph-title">Задача</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="paragraph-item">
              <p class="paragraph-title">Задача</p>
              <p>до 800 000 рублей</p>
            </div>
          </div>
          <div class="homeDetail-right-body-img">
            <img src="@/assets/images/homeDetail/one.jpg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae
            massa sollicitudin sed. Sapien in pellentesque nascetur purus
            ultrices rhoncus maecenas nibh ultricies. Egestas quis quis urna,
            sagittis nam. Morbi risus rhoncus commodo pharetra, penatibus
            ullamcorper scelerisque.
          </p>
          <div class="homeDetail-right-body-img">
            <img src="@/assets/images/homeDetail/two.jpg" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae
            massa sollicitudin sed. Sapien in pellentesque nascetur purus
            ultrices rhoncus maecenas nibh ultricies. Egestas quis quis urna,
            sagittis nam. Morbi risus rhoncus commodo pharetra, penatibus
            ullamcorper scelerisque. <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae
            massa sollicitudin sed. Sapien in pellentesque nascetur purus
            ultrices rhoncus maecenas nibh ultricies. Egestas quis quis urna,
            sagittis nam. Morbi risus rhoncus commodo pharetra, penatibus
            ullamcorper scelerisque.
          </p>
          <div class="homeDetail-right-body-img">
            <img src="@/assets/images/homeDetail/three.jpg" alt="" />
          </div>
          <div class="paragraph-section">
            <div class="paragraph-item">
              <p class="paragraph-title">Сферы:</p>
              <p>Социальные сети/ Реферальная система</p>
            </div>
            <div class="paragraph-item">
              <p class="paragraph-title">Сроки:</p>
              <p>Проект выполнен за 4 месяца</p>
            </div>
          </div>
          <div class="like-prodgect">
            <h3 @click="ddd()">Понравился проект?</h3>
            <router-link to="/submit">
              <div class="like-prodgect-item">
                <p class="gradient-text">ОСТАВИТЬ ЗАЯВКУ</p>
                <div class="arrow">
                  <img src="@/assets/images/icon/arrowSm.png" alt="" />
                </div>
              </div>
            </router-link>
          </div>
          <div class="homeDetail-right-bottom">
            <div @click="ddd()" class="homeDetail-right-bottom-item">
              <div class="item-arrow prev">
                <svg
                  width="33"
                  height="22"
                  viewBox="0 0 33 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M17.0818 0.140326C16.8918 -0.0431421 16.5891 -0.0378528 16.4057 0.15207C16.2267 0.337375 16.2267 0.631112 16.4057 0.816373L26.5861 10.9977L16.4047 21.1781C16.2148 21.3615 16.2096 21.6642 16.393 21.8542C16.5765 22.0441 16.8791 22.0493 17.0691 21.8659C17.0731 21.862 17.077 21.8582 17.0808 21.8542L27.5997 11.3353C27.7864 11.1486 27.7864 10.8459 27.5997 10.6592L17.0818 0.140326Z"
                      fill="#F44336"
                    />
                    <path
                      d="M16.7436 21.9946C16.4796 21.9951 16.2651 21.7814 16.2646 21.5173C16.2644 21.39 16.315 21.2679 16.4051 21.178L26.5865 10.9976L16.4051 0.817256C16.2182 0.630292 16.2182 0.327187 16.4051 0.140223C16.5921 -0.046741 16.8952 -0.046741 17.0822 0.140223L27.6011 10.6591C27.7877 10.8458 27.7877 11.1485 27.6011 11.3352L17.0822 21.8541C16.9925 21.944 16.8707 21.9946 16.7436 21.9946Z"
                      fill="black"
                    />
                  </g>
                  <g clip-path="url(#clip1)">
                    <path
                      d="M6.08177 0.140326C5.89185 -0.0431421 5.58915 -0.0378528 5.40568 0.15207C5.22674 0.337375 5.22674 0.631112 5.40568 0.816373L15.5861 10.9977L5.40474 21.1781C5.21482 21.3615 5.20957 21.6642 5.39299 21.8542C5.57646 22.0441 5.87912 22.0493 6.06909 21.8659C6.07308 21.862 6.07698 21.8582 6.08083 21.8542L16.5997 11.3353C16.7864 11.1486 16.7864 10.8459 16.5997 10.6592L6.08177 0.140326Z"
                      fill="#F44336"
                    />
                    <path
                      d="M5.74365 21.9946C5.47958 21.9951 5.26514 21.7814 5.26465 21.5173C5.26443 21.39 5.31499 21.2679 5.40513 21.178L15.5865 10.9976L5.40513 0.817256C5.21817 0.630292 5.21817 0.327187 5.40513 0.140223C5.59209 -0.046741 5.8952 -0.046741 6.08216 0.140223L16.6011 10.6591C16.7877 10.8458 16.7877 11.1485 16.6011 11.3352L6.08216 21.8541C5.99251 21.944 5.87068 21.9946 5.74365 21.9946Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(11)"
                      />
                    </clipPath>
                    <clipPath id="clip1">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p>Проект CheckSkin</p>
            </div>
            <router-link to="">
              <div class="homeDetail-right-bottom-item">
                <p>Проект CheckSkin</p>
                <div class="item-arrow next">
                  <svg
                    width="33"
                    height="22"
                    viewBox="0 0 33 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M17.0818 0.140326C16.8918 -0.0431421 16.5891 -0.0378528 16.4057 0.15207C16.2267 0.337375 16.2267 0.631112 16.4057 0.816373L26.5861 10.9977L16.4047 21.1781C16.2148 21.3615 16.2096 21.6642 16.393 21.8542C16.5765 22.0441 16.8791 22.0493 17.0691 21.8659C17.0731 21.862 17.077 21.8582 17.0808 21.8542L27.5997 11.3353C27.7864 11.1486 27.7864 10.8459 27.5997 10.6592L17.0818 0.140326Z"
                        fill="#F44336"
                      />
                      <path
                        d="M16.7436 21.9946C16.4796 21.9951 16.2651 21.7814 16.2646 21.5173C16.2644 21.39 16.315 21.2679 16.4051 21.178L26.5865 10.9976L16.4051 0.817256C16.2182 0.630292 16.2182 0.327187 16.4051 0.140223C16.5921 -0.046741 16.8952 -0.046741 17.0822 0.140223L27.6011 10.6591C27.7877 10.8458 27.7877 11.1485 27.6011 11.3352L17.0822 21.8541C16.9925 21.944 16.8707 21.9946 16.7436 21.9946Z"
                        fill="black"
                      />
                    </g>
                    <g clip-path="url(#clip1)">
                      <path
                        d="M6.08177 0.140326C5.89185 -0.0431421 5.58915 -0.0378528 5.40568 0.15207C5.22674 0.337375 5.22674 0.631112 5.40568 0.816373L15.5861 10.9977L5.40474 21.1781C5.21482 21.3615 5.20957 21.6642 5.39299 21.8542C5.57646 22.0441 5.87912 22.0493 6.06909 21.8659C6.07308 21.862 6.07698 21.8582 6.08083 21.8542L16.5997 11.3353C16.7864 11.1486 16.7864 10.8459 16.5997 10.6592L6.08177 0.140326Z"
                        fill="#F44336"
                      />
                      <path
                        d="M5.74365 21.9946C5.47958 21.9951 5.26514 21.7814 5.26465 21.5173C5.26443 21.39 5.31499 21.2679 5.40513 21.178L15.5865 10.9976L5.40513 0.817256C5.21817 0.630292 5.21817 0.327187 5.40513 0.140223C5.59209 -0.046741 5.8952 -0.046741 6.08216 0.140223L16.6011 10.6591C16.7877 10.8458 16.7877 11.1485 16.6011 11.3352L6.08216 21.8541C5.99251 21.944 5.87068 21.9946 5.74365 21.9946Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(11)"
                        />
                      </clipPath>
                      <clipPath id="clip1">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/scriptsJS/app.js";
import { getPostsId } from "@/api/casesList/index.js";

export default {
  name: "homeDetail",
  props: ["id"],
  data() {
    return {
      width: "0",
      event: {},
    };
  },
  created() {
    getPostsId(this.id)
      .then(({ data }) => {
        this.event = data.data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
  mounted() {
    this.hendlResize();
    window.addEventListener("resize", this.hendlResize);
    this.homeDetailAnimation();
    this.recolorHudScroll();
    window.addEventListener("scroll", this.recolorHudScroll);
  },
  beforeUnmount() {
    window.addEventListener("resize", this.hendlResize);
  },
  computed: {
    prev() {
      return this.event.id;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    hendlResize() {
      this.width = window.innerWidth;
    },
    changeColors() {
      let sidebarLogoColor = document.querySelector(".sidebar-logo");

      const activeFunck = () => {
        sidebarLogoColor.classList.add(".change-color");
        console.log(111);
      };
      activeFunck();
    },
    ddd() {
      this.$router.replace({
        name: "HomeDetail",
        params: { id: this.prev - 1 },
      });
      console.log(this.event.id);
    },
    homeDetailAnimation() {
      const HomeDetailLeft = document.querySelector(".homeDetail-left");
      const HomeDetailRight = document.querySelector(".homeDetail-right");
      const SlideHomeImagesImg = document.querySelector(
        ".slideHome-images img"
      );
      const SlideHomeDescription = document.querySelector(
        ".slideHome-description"
      );
      const SlideHomeTitle = document.querySelector(".slideHome-title");
      const HomeDetailUpTitle = document.querySelector(".homeDetail-up-title");
      const HomeDetailBodyDown = document.querySelector(
        ".homeDetail-body-down"
      );
      const HomeDetailLeftBack = document.querySelector(
        ".homeDetail-left-back"
      );
      HomeDetailUpTitle.classList.add(
        "animate__animated",
        "animate__fadeInDown"
      );
      HomeDetailBodyDown.classList.add(
        "animate__animated",
        "animate__fadeInDown"
      );
      setTimeout(() => {
        HomeDetailLeft.classList.remove("active");
        HomeDetailRight.classList.remove("active");
        SlideHomeImagesImg.classList.remove("active");
        SlideHomeDescription.classList.remove("hide");
        SlideHomeTitle.classList.remove("hide");
      }, 1000);
      setTimeout(() => {
        HomeDetailLeftBack.classList.remove("hide");
      }, 2000);
    },
    recolorHudScroll() {
      const homeDetailLeft = document.querySelector(".homeDetail-left");
      const hdSidebarLang = document.querySelector(".sidebar-lang");
      const hdSidebarContact = document.querySelector(".sidebar-contact");
      const hdSidebarCase = document.querySelector(".sidebar-case");
      const hdLogo = document.querySelector(".sidebar-logo");
      const hdSidebarMenu = document.querySelector(".sidebar-menu");
      if (window.innerWidth < 1200) {
        // let xer = homeDetailLeft.getBoundingClientRect()
        if (homeDetailLeft.getBoundingClientRect().top < -100) {
          hdSidebarLang.classList.add("recolor");
          hdSidebarContact.classList.add("recolor");
          hdSidebarCase.classList.add("recolor");
          hdSidebarLang.classList.remove("active");
          hdSidebarMenu.classList.remove("active");
        } else {
          hdSidebarLang.classList.remove("recolor");
          hdSidebarContact.classList.remove("recolor");
          hdSidebarCase.classList.remove("recolor");
          hdSidebarLang.classList.remove("active");
          hdSidebarMenu.classList.remove("active");
        }
        if (homeDetailLeft.getBoundingClientRect().top < -850) {
          hdLogo.classList.add("recolor");
          hdSidebarMenu.classList.add("recolor");
          hdSidebarLang.classList.remove("active");
          hdSidebarMenu.classList.remove("active");
        } else {
          hdLogo.classList.remove("recolor");
          hdSidebarMenu.classList.remove("recolor");
          hdSidebarLang.classList.remove("active");
          hdSidebarMenu.classList.remove("active");
        }
      } else {
        console.log();
      }
      if (window.innerWidth < 500) {
        if (homeDetailLeft.getBoundingClientRect().top < -650) {
          hdLogo.classList.add("recolor");
          hdSidebarMenu.classList.add("recolor");
          hdSidebarMenu.classList.remove("active");
          hdSidebarLang.classList.remove("active");
        } else {
          hdLogo.classList.remove("recolor");
          hdSidebarLang.classList.remove("active");
          hdSidebarMenu.classList.remove("active");
          hdSidebarMenu.classList.remove("recolor");
        }
      } else {
        console.log();
      }
    },
  },
};
</script>

<style lang="scss">
// .sidebar-contact,
// .sidebar-lang,
// .sidebar-case {
//   display: none;
// }
.notActive {
  .sidebar {
    &-menu {
      &-one {
        background-color: rgba(255, 255, 255, 0.5) !important;
      }
      &-two {
        background-color: #fff !important;
      }
      &-three {
        background-color: rgba(255, 255, 255, 0.18) !important;
      }
    }
  }
}
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
.recolorWhite {
  color: #fff !important;
  .sidebar-menu {
    &-one {
      background-color: rgba(255, 255, 255, 0.5) !important;
    }

    &-two {
      background-color: #fff !important;
    }

    &-three {
      background-color: rgba(255, 255, 255, 0.18) !important;
    }
  }
  .sidebar-contact-item {
    color: #fff !important;
    background-color: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
  }
  .sidebar-case p {
    color: #fff !important;
  }
}
.recolor {
  color: #000 !important;

  .sidebar-contact-item {
    background: rgba(0, 0, 0, 0.05) !important;
    border: 1px solid rgba(0, 0, 0, 0.15) !important;
    color: #000 !important;
    transition: 0.5;

    svg {
      path {
        fill: #000;
      }
    }
  }
  .sidebar-menu {
    &-one {
      background: rgba(0, 0, 0, 0.5) !important;
    }

    &-two {
      background: #000 !important;
    }

    &-three {
      background: rgba(0, 0, 0, 0.18) !important;
    }

    .sidebar-case-content {
      p {
        color: #000;
      }
    }
  }
  .sidebar-case-content {
    .sidebar-case-arrow {
      svg {
        g {
          path {
            fill: #fff !important;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 576px) {
  .pHomeDetail {
    .sidebar-menu-one {
      background-color: rgba(255, 255, 255, 0.5) !important;
    }
    &.sidebar-contact-item {
      background-color: rgba(255, 255, 255, 0.05) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      color: #fff !important;
    }
  }
  .sidebar-menu {
    &.active {
      .sidebar-menu {
        &-one {
          background-color: rgba(255, 255, 255, 0.5) !important;
        }
      }
    }
  }
  .sidebar-lang.active {
    color: #fff !important;
    background-color: brown;
  }
}
</style>
