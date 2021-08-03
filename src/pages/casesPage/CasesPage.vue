<template>
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
<style lang="scss" scoped>
// .slide-enter-active {
//   transition: all 1.5s ease-in-out;
// }
// .slide-leave-active {
//   transition: all 1.5s ease-in-out;
// }
// .slide-enter {
//   transform: translateY(-100%);
//   transform: 2s;
// }
// .slide-enter-to {
//   transform: translateY(0%);
//   transform: 2s;
// }
// .slide-leave {
//   transform: translateY(0%);
//   transform: 2s;
// }
// .slide-leave-to {
//   transform: translateY(100%);
//   transform: 2s;
// }
</style>
