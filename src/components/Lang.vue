<template>
  <div
    v-if="
      this.$route.name === 'Home' ||
      this.$route.name === 'Contact' ||
      this.$route.name === 'SubmitPage'
    "
    class="sidebar-lang"
  >
    <div class="sidebar-contact-item">EN</div>
  </div>
  <div v-else class="sidebar-lang active">
    <div class="sidebar-contact-item">EN</div>
  </div>
 
</template>

<script>
export default {
  name: "lang",
};
</script>
