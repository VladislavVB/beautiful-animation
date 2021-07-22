<template>
  <Logo />
  <Menu />
  <Contact />
  <!-- <div class="d-sm-none"> -->
  <Case />
  <!-- </div> -->
  <Lang />
  <div class="submitPage">
    <div class="submitPage-left">
      <div class="submitPage-left-body">
        <p class="title gradient-text">Оставить заявку</p>
        <div class="block-choose">
          <h5 class="block-choose-title">Выберите услугу:</h5>
          <div class="row">
            <div class="col-xxl-3 col-lg-6">
              <div class="block-choose-card"><p>Мобильное приложение</p></div>
            </div>
            <div class="col-xxl-3 col-lg-6">
              <div class="block-choose-card"><p>Web-платформа</p></div>
            </div>
            <div class="col-xxl-3 col-lg-6">
              <div class="block-choose-card"><p>Нейросеть</p></div>
            </div>
            <div class="col-xxl-3 col-lg-6">
              <div class="block-choose-card"><p>Боты</p></div>
            </div>
          </div>
        </div>
        <div class="block-choose">
          <h5 class="block-choose-title">Выберите бюджет проекта:</h5>
          <div class="row">
            <div class="col-xxl-3 col-lg-4">
              <div class="block-choose-card"><p>до 1 млн</p></div>
            </div>
            <div class="col-xxl-3 col-lg-4">
              <div class="block-choose-card"><p>1-3 млн</p></div>
            </div>
            <div class="col-xxl-3 col-lg-4">
              <div class="block-choose-card"><p>3-5 млн</p></div>
            </div>
            <div class="col-xxl-3 col-lg-4">
              <div class="block-choose-card"><p>Не знаю</p></div>
            </div>
          </div>
        </div>
        <div class="block-choose">
          <h5 class="block-choose-title">Описание проекта:</h5>
          <div class="row">
            <div class="col-xxl-9 col-lg-12">
              <input
                placeholder="Опишите проект"
                class="block-choose-card big"
              />
            </div>
            <div class="col-xxl-3 col-lg-6">
              <div class="block-choose-card"><p>Не знаю</p></div>
            </div>
          </div>
        </div>
        <div class="block-choose">
          <h5 class="block-choose-title">Контактные данные:</h5>
          <div class="row">
            <div class="col-xxl-4">
              <input
                type="text"
                placeholder="Как Вас зовут?"
                class="block-choose-card big"
              />
            </div>
            <div class="col-xxl-4">
              <input
                type="tell"
                placeholder="Ваш телефон"
                class="block-choose-card big"
              />
            </div>
            <div class="col-xxl-4 d-flex justify-content-end align-items-center">
              <div class="presentation-buttom">
                <p class="gradient-text">ОСТАВИТЬ ЗАЯВКУ</p>
                <div class="presentation-buttom-img">
                  <img
                    src="@/assets/images/icon/presentationArrow.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-xxl-4">
              <input
                type="email"
                placeholder="Email"
                class="block-choose-card big"
              />
            </div>
          </div>
        </div>
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
    <div class="submitPage-right">
      <div @click="goBack" class="menuPage-left-back">
        <img src="@/assets/images/icon/back.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmitPage",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
