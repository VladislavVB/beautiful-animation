setTimeout(() => {
  const homeDetailLeft = document.querySelector(".homeDetail-left");
  const hdSidebarLang = document.querySelector(".sidebar-lang");
  const hdSidebarContact = document.querySelector(".sidebar-contact");
  const hdSidebarCase = document.querySelector(".sidebar-case");
  const hdLogo = document.querySelector(".sidebar-logo");
  const hdSidebarMenu = document.querySelector(".sidebar-menu");

  const reColorHud = () => {
    if (window.innerWidth < 1200) {
      // let xer = homeDetailLeft.getBoundingClientRect()
      if (homeDetailLeft.getBoundingClientRect().top < -100) {
        hdSidebarLang.classList.add("recolor");
        hdSidebarContact.classList.add("recolor");
        hdSidebarCase.classList.add("recolor");
        hdSidebarLang.classList.remove("active");
        hdSidebarMenu.classList.remove("active");
      } else {
        hdSidebarLang.classList.remove("recolor");
        hdSidebarContact.classList.remove("recolor");
        hdSidebarCase.classList.remove("recolor");
        hdSidebarLang.classList.remove("active");
        hdSidebarMenu.classList.remove("active");
      }
      if (homeDetailLeft.getBoundingClientRect().top < -850) {
        hdLogo.classList.add("recolor");
        hdSidebarMenu.classList.add("recolor");
        hdSidebarLang.classList.remove("active");
        hdSidebarMenu.classList.remove("active");
      } else {
        hdLogo.classList.remove("recolor");
        hdSidebarMenu.classList.remove("recolor");
        hdSidebarLang.classList.remove("active");
        hdSidebarMenu.classList.remove("active");
      }
    } else {
      console.log();
    }
    if (window.innerWidth < 500) {
      if (homeDetailLeft.getBoundingClientRect().top < -650) {
        hdLogo.classList.add("recolor");
        hdSidebarMenu.classList.add("recolor");
        hdSidebarMenu.classList.remove("active");
        hdSidebarLang.classList.remove("active");
      } else {
        hdLogo.classList.remove("recolor");
        hdSidebarLang.classList.remove("active");
        hdSidebarMenu.classList.remove("active");
        hdSidebarMenu.classList.remove("recolor");
      }
    } else {
      console.log();
    }
    // console.log(homeDetailLeft.getBoundingClientRect());
  };

  window.addEventListener("scroll", () => {
    reColorHud();
  });
  reColorHud();
}, 2000);
