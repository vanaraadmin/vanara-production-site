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

  const normalizePath = (pathname) => {
    let path = pathname || "/";

    if (path.endsWith("/index.html")) {
      path = path.slice(0, -"index.html".length);
    }

    if (path.endsWith(".html")) {
      path = path.slice(0, -5);
    }

    if (path !== "/" && path.endsWith("/")) {
      path = path.slice(0, -1);
    }

    return path || "/";
  };

  const updateLanguageSwitch = () => {
    const switchers = document.querySelectorAll("[data-language-switch]");

    if (!switchers.length) return;

    const rawPath = window.location.pathname || "/";
    const usesHtml = rawPath.endsWith(".html");
    const currentPath = normalizePath(rawPath);
    const isThai = currentPath === "/th" || currentPath.startsWith("/th/");
    const basePath = isThai
      ? normalizePath(currentPath.replace(/^\/th(?=\/|$)/, "") || "/")
      : currentPath;
    const withFormat = (path) => {
      if (!usesHtml || path === "/" || path === "/th/") return path;
      return `${path}.html`;
    };
    const englishPath = withFormat(basePath === "/" ? "/" : basePath);
    const thaiPath = withFormat(basePath === "/" ? "/th/" : `/th${basePath}`);

    switchers.forEach((switcher) => {
      switcher.querySelectorAll("[data-lang]").forEach((link) => {
        const lang = link.dataset.lang;
        const href = lang === "th" ? thaiPath : englishPath;
        const isCurrent = (lang === "th") === isThai;

        link.setAttribute("href", href);
        link.classList.toggle("is-current", isCurrent);

        if (isCurrent) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
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
      const isHomepage =
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html";
      const target = new URL(link.href, window.location.href);

      if (isHomepage && target.pathname === "/" && !target.hash) {
        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    });
  });

  updateLanguageSwitch();
  updateHeader();
  updateActiveLink();
})();
