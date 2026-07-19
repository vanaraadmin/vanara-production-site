(() => {
  "use strict";

  const menu = document.querySelector("[data-mobile-menu]");
  const openButton = document.querySelector("[data-menu-open]");

  if (!menu || !openButton) return;

  const closeButtons = menu.querySelectorAll("[data-menu-close]");
  const links = menu.querySelectorAll("[data-menu-link]");
  const panel = menu.querySelector(".mobile-menu__panel");

  let touchStartY = 0;

  function openMenu() {
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("has-mobile-menu-open");
    document.body.classList.add("has-mobile-menu-open");
    openButton.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("has-mobile-menu-open");
    document.body.classList.remove("has-mobile-menu-open");
    openButton.setAttribute("aria-expanded", "false");
  }

  openButton.addEventListener("click", openMenu);

  closeButtons.forEach(btn => btn.addEventListener("click", closeMenu));
  links.forEach(link => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  panel.addEventListener("touchstart", e => {
    touchStartY = e.touches[0].clientY;
  }, {passive:true});

  panel.addEventListener("touchend", e => {
    const delta = touchStartY - e.changedTouches[0].clientY;
    if (delta > 80) closeMenu();
  }, {passive:true});
})();