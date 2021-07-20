<template>
  <p v-if="this.$route.name === 'Home'" class="sidebar-case">КЕЙСЫ</p>
  <p v-else class="sidebar-case active">КЕЙСЫ</p>
</template>

<script>
export default {
  name: "case",
};
</script>
