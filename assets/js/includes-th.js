(() => {
  "use strict";

  const COMPONENTS = [
    {
      target: "#site-header",
      file: "/components/th/header.html"
    },
    {
      target: "#site-mobile-menu",
      file: "/components/th/menu-mobile.html"
    },
    {
      target: "#site-footer",
      file: "/components/th/footer.html"
    },
    {
      target: "#site-concierge",
      file: "/components/th/concierge.html"
    }
  ];

  const COMPONENT_SCRIPTS = [
    "/assets/js/header.js",
    "/assets/js/mobile-menu.js",
    "/assets/js/concierge-th.js"
  ];

  async function loadComponent({ target, file }) {
    const container = document.querySelector(target);

    if (!container) {
      return;
    }

    try {
      const response = await fetch(file, {
        cache: "no-cache"
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      container.innerHTML = await response.text();
    } catch (error) {
      console.error(`Vanara: could not load ${file}`, error);
    }
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[data-component-script="${src}"]`)) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.dataset.componentScript = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Could not load ${src}`));

      document.body.appendChild(script);
    });
  }

  async function initializeSharedComponents() {
    await Promise.all(COMPONENTS.map(loadComponent));

    for (const src of COMPONENT_SCRIPTS) {
      try {
        await loadScript(src);
      } catch (error) {
        console.error("Vanara: component initialization error", error);
      }
    }

    document.dispatchEvent(new CustomEvent("vanara:components-ready"));
    document.documentElement.classList.add("components-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSharedComponents, {
      once: true
    });
  } else {
    initializeSharedComponents();
  }
})();

