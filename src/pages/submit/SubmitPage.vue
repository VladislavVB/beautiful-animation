<template>
  <!-- <Logo class="goWhiteSub dfdffd" />
  <Menu />
  <Contact />
  <div class="d-sm-flex d-none">
    <Case class="goBlackSub" />
  </div>
  <Lang class="goBlackSub" /> -->
  <div class="submitPage">
    <div data-aos="fade-right" data-aos-duration="1000" class="submitPage-left">
      <div class="submitPage-left-body">
        <p class="title gradient-text">Оставить заявку</p>
        <form @submit.prevent="submitHandler">
          <div class="block-choose">
            <h5 class="block-choose-title">
              Выберите услугу:
              <span v-if="notKnowD" class="error error-text"
                ><svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 0C4.69617 0 0 4.69658 0 10.5C0 16.3038 4.69658 21 10.5 21C16.3038 21 21 16.3034 21 10.5C21 4.69617 16.3034 0 10.5 0ZM10.5 19.3594C5.60302 19.3594 1.64062 15.3967 1.64062 10.5C1.64062 5.60302 5.60335 1.64062 10.5 1.64062C15.397 1.64062 19.3594 5.60335 19.3594 10.5C19.3594 15.397 15.3967 19.3594 10.5 19.3594Z"
                    fill="#FF6161"
                  />
                  <path
                    d="M10.5 5.28595C10.0469 5.28595 9.67969 5.6532 9.67969 6.10626V11.3888C9.67969 11.8418 10.0469 12.2091 10.5 12.2091C10.9531 12.2091 11.3203 11.8418 11.3203 11.3888V6.10626C11.3203 5.6532 10.9531 5.28595 10.5 5.28595Z"
                    fill="#FF6161"
                  />
                  <path
                    d="M10.5 15.4284C11.1116 15.4284 11.6074 14.9326 11.6074 14.321C11.6074 13.7094 11.1116 13.2136 10.5 13.2136C9.88839 13.2136 9.39258 13.7094 9.39258 14.321C9.39258 14.9326 9.88839 15.4284 10.5 15.4284Z"
                    fill="#FF6161"
                  />
                </svg>
                Пожалуйста, выберите один из вариантов</span
              >
            </h5>
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
            <h5 class="block-choose-title">
              Выберите бюджет проекта:
              <span
                v-if="selBudget === itemBudget ? 'stonks-blok-active' : ''"
                class="error error-text"
                ><svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 0C4.69617 0 0 4.69658 0 10.5C0 16.3038 4.69658 21 10.5 21C16.3038 21 21 16.3034 21 10.5C21 4.69617 16.3034 0 10.5 0ZM10.5 19.3594C5.60302 19.3594 1.64062 15.3967 1.64062 10.5C1.64062 5.60302 5.60335 1.64062 10.5 1.64062C15.397 1.64062 19.3594 5.60335 19.3594 10.5C19.3594 15.397 15.3967 19.3594 10.5 19.3594Z"
                    fill="#FF6161"
                  />
                  <path
                    d="M10.5 5.28595C10.0469 5.28595 9.67969 5.6532 9.67969 6.10626V11.3888C9.67969 11.8418 10.0469 12.2091 10.5 12.2091C10.9531 12.2091 11.3203 11.8418 11.3203 11.3888V6.10626C11.3203 5.6532 10.9531 5.28595 10.5 5.28595Z"
                    fill="#FF6161"
                  />
                  <path
                    d="M10.5 15.4284C11.1116 15.4284 11.6074 14.9326 11.6074 14.321C11.6074 13.7094 11.1116 13.2136 10.5 13.2136C9.88839 13.2136 9.39258 13.7094 9.39258 14.321C9.39258 14.9326 9.88839 15.4284 10.5 15.4284Z"
                    fill="#FF6161"
                  />
                </svg>
                Пожалуйста, выберите один из вариантов</span
              >
            </h5>
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
                  @input="cheackTextarea()"
                  v-model="textarea"
                ></textarea>
                <!-- <span class="error" v-if="v$.formSubData.prodgect.$error">
                  опишите проект
                </span> -->
              </div>
              <div class="col-xxl-3 col-lg-6 col-sm-6">
                <div v-if="!textarea" class="block-choose-card">
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
                  v-model="state.formSubData.name"
                />
                <span class="error" v-if="v$.formSubData.name.$error">
                  Введите имя
                </span>
              </div>
              <div class="col-xxl-4 col-sm-6 order-2">
                <input
                  id="phone"
                  type="number"
                  placeholder="Ваш телефон"
                  class="block-choose-card big"
                  v-maska="'###########'"
                  v-model="state.formSubData.phone"
                />
                <span class="error" v-if="v$.formSubData.phone.$error">
                  Введите телефон
                </span>
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
                  @click="submitForm"
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
                  v-model="state.formSubData.email"
                />
                <span class="error" v-if="v$.formSubData.email.$error">
                  Email не корректный
                </span>
                <!-- <span else="v$.FormData.email.$required">
                  Введите почту11112
                </span> -->
              </div>
              <div class="col-xxl-4 order-4 col-sm-6">
                <div class="submit-cheack">
                  <input
                    @click="cheacked = !cheacked"
                    id="submitOerder"
                    type="checkbox"
                    checked
                  />
                  <label>Я согласен на обработку персональных данных</label>
                  <span v-if="cheacked" class="error"> Политика </span>
                </div>
              </div>
              <div class="hide-input"></div>
              <div class="hide-input"></div>
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
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "vuelidate/lib/validators";
import { maska } from "maska";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      formSubData: {
        name: "",
        phone: "",
        email: "",
        prodgect: "",
      },
    });

    const rules = computed(() => {
      return {
        formSubData: {
          name: { required, minLength: minLength(4) },
          phone: { required, minLength: minLength(6) },
          email: { required, email },
          prodgect: { required, minLength: minLength(6) },
        },
      };
    });

    const v$ = useVuelidate(rules, state);

    return {
      state,
      v$,
    };
  },
  name: "SubmitPage",
  directives: { maska },
  data() {
    return {
      activeServ: null,
      cheacked: false,
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
      textarea: null,
    };
  },
  mounted: function () {
    this.cheackTextarea();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    notKnow(status) {
      this.notKnowD = status;
    },
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Submit");
      } else {
        console.log("NOT submit");
      }
    },
    cheackTextarea() {
      console.log(this.textarea);
      let activeServes = this.activeServ;
      console.log(activeServes);
      let a = document.querySelector(".services-blok-active");
      console.log(a);
    },
    checkedCheack() {
      let cheack = document.getElementById("submitOerder");
      if (cheack.checked == 1) {
        console.log("Nice");
      } else {
        console.log("XER");
      }
    },

    // servicesValue() {
    //   let servicesValue = document.querySelector(".services-blok-active");
    //   servicesValue.value;
    //   console.log(servicesValue.value);
    // },
  },
};
</script>
