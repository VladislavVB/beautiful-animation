<template>
  <Logo />
  <Menu />
  <Contact />
  <Case />
  <Lang />
  <div class="menuPage-wrapper">
    <div class="menuPage">
      <div class="menuPage-left">
        <div class="menuPage-left-back">
          <img src="@/assets/images/icon/back.png" alt="" />
        </div>
      </div>
      <div class="menuPage-body-wrapper">
        <div class="menuPage-body-menu">
          <ul>
            <li>
              <span>О компании </span>
              <p class="textHover">
                Кто мы такие, наша философи и оказываемые услуги
              </p>
            </li>
            <li>
              <span>Кейсы </span>
              <p class="textHover">
                Кто мы такие, наша философи и оказываемые услуги
              </p>
            </li>
            <li>
              <span>Контакты </span>
              <p class="textHover">
                Кто мы такие, наша философи и оказываемые услуги
              </p>
            </li>
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
