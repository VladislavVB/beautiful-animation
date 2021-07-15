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
          <p>О компании</p>
          <p>Кейсы</p>
          <p>Контакты</p>
        </div>
        <div class="menuPage-body-buttom">
          <div class="buttom-item">
            <p>ПРЕЗЕНТАЦИЯ</p>
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
