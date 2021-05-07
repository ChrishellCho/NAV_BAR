const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".snsIcons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
