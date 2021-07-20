<template>
  <router-link to="/menu-page">
    <div v-if="this.$route.name === 'Home'" class="sidebar-menu">
      <span class="sidebar-menu-one"></span>
      <span class="sidebar-menu-two"></span>
      <span class="sidebar-menu-three"></span>
    </div>
    <div v-else class="sidebar-menu active">
      <span class="sidebar-menu-one"></span>
      <span class="sidebar-menu-two"></span>
      <span class="sidebar-menu-three"></span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="scss">
#app {
  overflow: hidden;
}
</style>
