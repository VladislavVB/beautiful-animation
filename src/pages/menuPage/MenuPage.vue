<template>
  <Logo />
  <Menu />
  <Contact />
  <div class="d-sm-flex d-none">
    <Case />
  </div>
  <Lang />
  <div class="menuPage-wrapper">
    <div class="menuPage">
      <div class="menuPage-left">
        <router-link to="/">
          <div class="menuPage-left-back">
            <img src="@/assets/images/icon/back.png" alt="" />
          </div>
        </router-link>
      </div>
      <div class="menuPage-body-wrapper">
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
            <router-link to="/">
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
};
</script>
