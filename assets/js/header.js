(() => {
  "use strict";

  const header = document.querySelector("[data-site-header]");

  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateHeader = () => {
    const currentScrollY = window.scrollY;

    header.classList.toggle("is-scrolled", currentScrollY > 40);

    if (currentScrollY > lastScrollY && currentScrollY > 180) {
      header.classList.add("is-hidden");
    } else {
      header.classList.remove("is-hidden");
    }

    lastScrollY = Math.max(currentScrollY, 0);
    ticking = false;
  };

  const sectionLinks = [
    ...document.querySelectorAll('.site-header__link[href*="#"]')
  ];

  const sections = sectionLinks
    .map((link) => {
      const href = link.getAttribute("href");
      const sectionId = href?.split("#")[1];
      const section = sectionId
        ? document.getElementById(sectionId)
        : null;

      return section ? { link, section } : null;
    })
    .filter(Boolean);

  const updateActiveLink = () => {
    const scrollPosition = window.scrollY + 180;

    sections.forEach(({ link, section }) => {
      const sectionStart = section.offsetTop;
      const sectionEnd = sectionStart + section.offsetHeight;

      link.classList.toggle(
        "is-active",
        scrollPosition >= sectionStart && scrollPosition < sectionEnd
      );
    });
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateHeader();
          updateActiveLink();
        });

        ticking = true;
      }
    },
    { passive: true }
  );

  document.querySelectorAll("[data-scroll-top]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

      const href = link.getAttribute("href");

      if (currentPage === "index.html" && href === "index.html") {
        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    });
  });

  updateHeader();
  updateActiveLink();
})();