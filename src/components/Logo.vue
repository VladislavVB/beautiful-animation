<template>
  <router-link to="/">
    <div
      v-if="this.$route.name === 'Home' || this.$route.name === 'AboutPage'"
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
