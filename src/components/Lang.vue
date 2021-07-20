<template>
  <div v-if="this.$route.name === 'Home'" class="sidebar-lang">
    <!-- <p>КЕЙСЫ</p> -->
    <div class="sidebar-contact-item">EN</div>
  </div>
  <div v-else class="sidebar-lang active">
    <!-- <p>КЕЙСЫ</p> -->
    <div class="sidebar-contact-item">EN</div>
  </div>
</template>

<script>
export default {
  name: "lang",
};
</script>
