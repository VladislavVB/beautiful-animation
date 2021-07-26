<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <router-link to="/">
    <div
      v-if="
        this.$route.name === 'Home' ||
        this.$route.name === 'HomeDetail' ||
        this.$route.name === 'MenuPage'
      "
      class="sidebar-logo"
    >
      CROUP 44
    </div>
    <div v-else class="sidebar-logo active">CROUP 44</div>
  </router-link>
</template>

<script>
export default {
  name: "logo",
};
</script>
