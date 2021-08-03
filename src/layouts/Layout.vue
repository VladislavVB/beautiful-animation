<template>
  <component :is="layout" />
</template>

<script>
import DefaultLayout from "./types/DefaultLayout";
export default {
  name: "Layout",
  components: {
    DefaultLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout ?? "DefaultLayout";
    },
  },
};
</script>
<style scoped></style>
