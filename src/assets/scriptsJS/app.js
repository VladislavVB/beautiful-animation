setTimeout(() => {
  // let centerX = document.documentElement.clientWidth / 2;
  // let centerY = document.documentElement.clientHeight / 2;
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
      } else {
        hdSidebarLang.classList.remove("recolor");
        hdSidebarContact.classList.remove("recolor");
        hdSidebarCase.classList.remove("recolor");
      }
      if (homeDetailLeft.getBoundingClientRect().top < -850) {
        hdLogo.classList.add("recolor");
        hdSidebarMenu.classList.add("recolor");
      } else {
        hdLogo.classList.remove("recolor");
        hdSidebarMenu.classList.remove("recolor");
      }
    } else {
      console.log();
    }
    console.log(homeDetailLeft.getBoundingClientRect());
  };

  window.addEventListener("scroll", () => {
    reColorHud();
    // console.log(111);
  });
}, 500);
