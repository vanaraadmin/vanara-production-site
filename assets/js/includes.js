(() => {
  "use strict";

  const COMPONENTS = [
    {
      target: "#site-header",
      file: "components/header.html"
    },
    {
      target: "#site-mobile-menu",
      file: "components/menu-mobile.html"
    },
    {
      target: "#site-footer",
      file: "components/footer.html"
    },
    {
      target: "#site-concierge",
      file: "components/concierge.html"
    }
  ];

  const COMPONENT_SCRIPTS = [
    "assets/js/header.js",
    "assets/js/mobile-menu.js",
    "assets/js/concierge.js"
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
      console.error(`Vanara: impossibile caricare ${file}`, error);
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
      script.onerror = () => reject(new Error(`Impossibile caricare ${src}`));

      document.body.appendChild(script);
    });
  }

  async function initializeSharedComponents() {
    await Promise.all(COMPONENTS.map(loadComponent));

    for (const src of COMPONENT_SCRIPTS) {
      try {
        await loadScript(src);
      } catch (error) {
        console.error("Vanara: errore inizializzazione componente", error);
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