<template>
  <Logo />
  <Menu />
  <Contact />
  <Case />
  <Lang />
  <div class="container-axas d-flex align-items-center min-vh-100">
    <div class="casesPage">
      <caseSlider />
    </div>
  </div>
</template>

<script>
import caseSlider from "@/pages/casesPage/components/CaseSlider";

export default {
  name: "CasesPage",
  components: {
    caseSlider,
  },
};
</script>
