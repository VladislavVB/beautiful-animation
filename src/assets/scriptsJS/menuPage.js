setTimeout(() => {
  const menuPageSidebarContact = document.querySelector(".sidebar-contact");
  const menuPageSlidebaMenu = document.querySelector(".sidebar-menu");

  const recolorMenuPage = () => {
    if (window.innerWidth < 500) {
      menuPageSidebarContact.classList.add("active");
      menuPageSlidebaMenu.classList.remove("active");
    }
  };

  // window.addEventListener("scroll", () => {
  recolorMenuPage();
  // });
  window.addEventListener("loader", () => {
    recolorMenuPage();
    
  });
  console.log('dsdasdsadsadsdsa');
}, 500);
