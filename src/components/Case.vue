<template>
  <router-link to="/cases">
    <p
      v-if="
        this.$route.name === 'Home' ||
        this.$route.name === 'Contact' ||
        this.$route.name === 'SubmitPage'
      "
      class="sidebar-case"
    >
      КЕЙСЫ
    </p>
    <p v-else class="sidebar-case active">КЕЙСЫ</p>
  </router-link>
</template>

<script>
export default {
  name: "case",
};
</script>
