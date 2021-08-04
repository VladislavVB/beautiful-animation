setTimeout(() => {
  const homePageSidebarContact = document.querySelector(".sidebar-contact");
  // const homePageSlidebaMenu = document.querySelector(".sidebar-menu");

  const recolorMenuPage = () => {
    if (window.innerWidth < 500) {
      homePageSidebarContact.classList.remove("active");
      // homePageSlidebaMenu.classList.remove("active");
    }
  };

  // window.addEventListener("scroll", () => {
  recolorMenuPage();
  // });
  window.addEventListener("loader", () => {
    recolorMenuPage();
  });
}, 500);
