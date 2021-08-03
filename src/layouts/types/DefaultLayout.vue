<template>
  <Logo />
  <Menu />
  <Contact />
  <Case />
  <Lang />
  <router-view v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
export default {
  name: "Default",
  components: {},
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5 ease-out;
}
</style>
