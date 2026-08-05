const menuToggle = document.getElementById("menu-toggle");
const navPanel = document.getElementById("nav-panel");

function toggleMenu() {
  const isOpen = navPanel.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}
menuToggle.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-panel-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navPanel.classList.contains("open")) toggleMenu();
  });
});
