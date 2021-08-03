<template>
  <div class="menuPage-wrapper">
    <div class="menuPage">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-offset="800"
        class="menuPage-left"
      >
        <div @click="goBack" class="menuPage-left-back">
          <img src="@/assets/images/icon/back.png" alt="" />
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        class="menuPage-body-wrapper"
      >
        <div class="menuPage-body-menu">
          <ul>
            <router-link to="/about">
              <li>
                <span>О компании </span>
                <p class="textHover">
                  Кто мы такие, наша философи и оказываемые услуги
                </p>
              </li>
            </router-link>
            <router-link to="/cases">
              <li>
                <span>Кейсы </span>
                <p class="textHover">
                  Кто мы такие, наша философи и оказываемые услуги
                </p>
              </li>
            </router-link>
            <router-link to="/contact">
              <li>
                <span>Контакты </span>
                <p class="textHover">
                  Кто мы такие, наша философи и оказываемые услуги
                </p>
              </li>
            </router-link>
          </ul>
        </div>
        <div class="menuPage-body-buttom">
          <div class="buttom-item">
            <PresentBtn />
          </div>
          <div class="buttom-item">
            <CallBtn />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "menuPage",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 1200px) {
  .notAcive {
    .sidebar-logo {
      color: #fff !important;
    }
    .sidebar-menu {
      .sidebar {
        &-menu {
          &-one {
            background-color: rgba(255, 255, 255, 0.5) !important;
          }
          &-two {
            background-color: #fff !important;
          }
          &-three {
            background-color: rgba(255, 255, 255, 0.18);
          }
        }
      }
    }
    .sidebar-contact-item {
      background: rgba(0, 0, 0, 0.05) !important;
      border: 1px solid rgba(0, 0, 0, 0.15) !important;
      svg {
        path {
          fill: #000;
        }
      }
    }
  }
}
</style>
