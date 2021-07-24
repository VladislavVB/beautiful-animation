<template>
  <Logo />
  <Menu />
  <Contact />
  <div class="d-sm-flex d-none">
    <Case />
  </div>
  <Lang />
  <div
    class="container-axas d-flex align-items-center min-vh-100 overflow-hidden"
  >
    <div class="casesPage">
      <div class="casesPage-head">
        <h2>Кейсы</h2>
      </div>
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
