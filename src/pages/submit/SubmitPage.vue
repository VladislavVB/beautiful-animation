<template>
  <Logo class="goWhiteSub dfdffd" />
  <Menu />
  <Contact />
  <div class="d-sm-flex d-none">
    <Case class="goBlackSub" />
  </div>
  <Lang class="goBlackSub" />
  <div class="submitPage">
    <div data-aos="fade-right" data-aos-duration="1000" class="submitPage-left">
      <div class="submitPage-left-body">
        <p class="title gradient-text">Оставить заявку</p>
        <form @submit.prevent="submitHandler">
          <div class="block-choose">
            <h5 class="block-choose-title">Выберите услугу:</h5>
            <div class="row">
              <div
                v-for="itemServices in servicesBloсk"
                :key="itemServices"
                @click="selServices = itemServices"
                class="col-xxl-3 col-lg-6 col-sm-6 col-12"
              >
                <div
                  :class="
                    selServices === itemServices ? 'services-blok-active' : ''
                  "
                  class="block-choose-card services-blok"
                >
                  <p>{{ itemServices }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="block-choose">
            <h5 class="block-choose-title">Выберите бюджет проекта:</h5>
            <div class="row">
              <div
                v-for="itemBudget in budgetBlock"
                :key="itemBudget"
                @click="selBudget = itemBudget"
                class="col-xxl-3 col-lg-4 col-sm-4 col-12"
              >
                <div
                  :class="selBudget === itemBudget ? 'stonks-blok-active' : ''"
                  class="block-choose-card stonks-block"
                >
                  <p>{{ itemBudget }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="block-choose">
            <h5 class="block-choose-title">Описание проекта:</h5>
            <div class="row">
              <div class="col-xxl-9 col-lg-12">
                <textarea
                  name=""
                  id=""
                  placeholder="Опишите проект"
                  class="block-choose-card big choose-textarea"
                ></textarea>
              </div>
              <div class="col-xxl-3 col-lg-6 col-sm-6">
                <div class="block-choose-card">
                  <p>Не знаю</p>
                </div>
              </div>
            </div>
          </div>
          <div class="block-choose">
            <h5 class="block-choose-title">Контактные данные:</h5>
            <div class="row">
              <div class="col-xxl-4 col-sm-6 order-1">
                <input
                  type="text"
                  placeholder="Как Вас зовут?"
                  class="block-choose-card big"
                />
              </div>
              <div class="col-xxl-4 col-sm-6 order-2">
                <input
                  type="tell"
                  placeholder="Ваш телефон"
                  class="block-choose-card big"
                />
              </div>
              <div
                class="
                  presentation-buttom-wrapper
                  col-xxl-4 col-lg-12
                  d-flex
                  justify-content-xxl-end justify-content-start
                  align-items-center
                  order-5 order-md-5 order-lg-5 order-xl-5 order-xxl-3
                "
              >
                <button
                  class="presentation-buttom presentation-button"
                  type="submit"
                >
                  <p class="gradient-text">ОСТАВИТЬ ЗАЯВКУ</p>
                  <div class="presentation-buttom-img">
                    <img
                      src="@/assets/images/icon/presentationArrow.png"
                      alt=""
                    />
                  </div>
                </button>
              </div>
              <div class="col-xxl-4 order-4 col-sm-6">
                <input
                  type="email"
                  placeholder="Email"
                  class="block-choose-card big"
                />
              </div>
              <div class="col-xxl-4 order-4 col-sm-6">
                <div class="submit-cheack">
                  <input id="submitOerde" type="checkbox" checked />
                  <label for="submitOerde"
                    >Я согласен на обработку персональных данных</label
                  >
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="submitPage-footer">
          <div class="submitPage-footer-content">
            <div class="item">
              <p>©2017-2021 «Аксас». Все права защищены</p>
              <p>ИНН: 233710743508; ОГРНИП: 317237500402141</p>
            </div>
            <div class="item">
              <p>
                Сайт разработан
                <a target="_blank" href="https://sector.business/"
                  >Сектор бизнеса</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" data-aos-duration="1500" class="submitPage-right">
      <div @click="goBack" class="menuPage-left-back">
        <img src="@/assets/images/icon/back.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmitPage",
  data() {
    return {
      servicesBloсk: [
        "Мобильное приложение",
        "Web-платформа",
        "Нейросеть",
        "Боты",
      ],
      selServices: null,
      budgetBlock: ["до 1 млн", "1-3 млн", "3-5 млн", "Не знаю"],
      selBudget: null,
      notKnowD: null,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    notKnow(status) {
      this.notKnowD = status;
    },
    submitHandler() {
      this.$router.push("/");
    },
  },
};
</script>
