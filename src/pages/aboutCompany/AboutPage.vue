<template>
  <!-- <Logo />
  <Menu />
  <Contact />
  <div class="d-sm-flex d-none">
    <Case />
  </div>
  <Lang /> -->
  <div style="margin: auto" class="container-axas h-100">
    <div class="aboutPage-wrapper">
      <div class="aboutPage-left">
        <div class="aboutPage-logo gradient-text">GROUP 44</div>
        <div class="aboutPage-block">
          <h5>Философия</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae
            massa sollicitudin sed. Sapien in pellentesque nascetur purus
            ultrices rhoncus maecenas nibh ultricies. Egestas quis quis urna,
            sagittis nam. Morbi risus rhoncus commodo pharetra, penatibus
            ullamcorper scelerisque.
          </p>
        </div>
        <div class="aboutPage-block">
          <h5>Услуги</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae
            massa sollicitudin sed. Sapien in pellentesque nascetur purus
            ultrices rhoncus maecenas nibh ultricies. Egestas quis quis urna,
            sagittis nam. Morbi risus rhoncus commodo pharetra, penatibus
            ullamcorper scelerisque.
          </p>
        </div>
      </div>
      <div class="aboutPage-right">
        <div class="aboutPage-right-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque vitae
            massa Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            vitae massa Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Neque vitae massa
          </p>
        </div>
        <div class="aboutPage-right-btns">
          <div class="btns-item">
            <PresentBtn />
          </div>
          <div class="btns-item">
            <CallBtn />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutPage",
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style lang="scss">
.slide-enter-active {
  transition: all 1.5s ease-in-out;
}
.slide-leave-active {
  transition: all 1.5s ease-in-out;
}
.slide-enter {
  transform: translateY(-100%);
  transform: 2s;
}
.slide-enter-to {
  transform: translateY(0%);
  transform: 2s;
}
.slide-leave {
  transform: translateY(0%);
  transform: 2s;
}
.slide-leave-to {
  transform: translateY(100%);
  transform: 2s;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
