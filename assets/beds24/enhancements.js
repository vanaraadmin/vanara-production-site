(function () {
  "use strict";

  if (window.location.pathname.includes("bookpay.php")) {
    return;
  }

  /* =========================================================
     VANARA BEDS24 — BODY BOTTOM ENHANCER
     1. Gallery più grande e pulita
     2. Spazio tra THB e prezzo
     3. Pulsanti Beds24 convertiti nello stile Vanara
     ========================================================= */

  const STYLE_ID = "vanara-beds24-final-enhancer";

  function installStyles() {
    if (document.getElementById(STYLE_ID)) {
      return;
    }

    const style = document.createElement("style");
    style.id = STYLE_ID;

    style.textContent = `
      /* =====================================================
         ROOM GALLERY
         ===================================================== */

      body.colorbody .b24-offer-pic,
      body.colorbody-en .b24-offer-pic {
        display: none !important;
      }

      body.colorbody .b24-offer-slider,
      body.colorbody-en .b24-offer-slider {
        float: left !important;
        width: 58.333333% !important;
        max-width: 58.333333% !important;
        padding-right: 15px !important;
        padding-left: 15px !important;
      }

      body.colorbody .b24-offer-select,
      body.colorbody-en .b24-offer-select {
        float: right !important;
        width: 41.666667% !important;
        max-width: 41.666667% !important;
        padding-right: 15px !important;
        padding-left: 15px !important;
      }

      body.colorbody .b24-offer-slider .carousel,
      body.colorbody-en .b24-offer-slider .carousel,
      body.colorbody .b24-offer-slider .carousel-inner,
      body.colorbody-en .b24-offer-slider .carousel-inner {
        width: 100% !important;
        height: 340px !important;
        min-height: 340px !important;
        overflow: hidden !important;
        border-radius: 14px !important;
        background: #f5f1e8 !important;
      }

      body.colorbody .b24-offer-slider .carousel-inner > .item,
      body.colorbody-en .b24-offer-slider .carousel-inner > .item {
        width: 100% !important;
        height: 340px !important;
      }

      body.colorbody .b24-offer-slider img.bootstrap-carousel-img,
      body.colorbody-en .b24-offer-slider img.bootstrap-carousel-img {
        display: block !important;
        width: 100% !important;
        height: 340px !important;
        max-width: none !important;
        max-height: none !important;
        margin: 0 !important;
        border-radius: 14px !important;
        object-fit: cover !important;
        object-position: center !important;
      }

      /* Gallery arrows */

      body.colorbody .b24-offer-slider .carousel-control,
      body.colorbody-en .b24-offer-slider .carousel-control {
        top: 50% !important;
        bottom: auto !important;
        width: 42px !important;
        height: 42px !important;
        margin-top: -21px !important;
        border: 1px solid rgba(255, 255, 255, 0.65) !important;
        border-radius: 50% !important;
        background: rgba(23, 59, 45, 0.84) !important;
        background-image: none !important;
        color: #ffffff !important;
        opacity: 1 !important;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18) !important;
        text-shadow: none !important;
      }

      body.colorbody .b24-offer-slider .carousel-control.left,
      body.colorbody-en .b24-offer-slider .carousel-control.left {
        left: 14px !important;
      }

      body.colorbody .b24-offer-slider .carousel-control.right,
      body.colorbody-en .b24-offer-slider .carousel-control.right {
        right: 14px !important;
      }

      body.colorbody .b24-offer-slider .carousel-control:hover,
      body.colorbody-en .b24-offer-slider .carousel-control:hover,
      body.colorbody .b24-offer-slider .carousel-control:focus,
      body.colorbody-en .b24-offer-slider .carousel-control:focus {
        background: #173b2d !important;
      }

      /* Gallery indicators */

      body.colorbody .b24-offer-slider .carousel-indicators,
      body.colorbody-en .b24-offer-slider .carousel-indicators {
        bottom: 12px !important;
        margin-bottom: 0 !important;
      }

      body.colorbody .b24-offer-slider .carousel-indicators li,
      body.colorbody-en .b24-offer-slider .carousel-indicators li {
        width: 7px !important;
        height: 7px !important;
        margin: 3px !important;
        border: 1px solid #ffffff !important;
        border-radius: 50% !important;
        background: rgba(255, 255, 255, 0.45) !important;
      }

      body.colorbody .b24-offer-slider .carousel-indicators .active,
      body.colorbody-en .b24-offer-slider .carousel-indicators .active {
        width: 9px !important;
        height: 9px !important;
        background: #ffffff !important;
      }

      /* =====================================================
         BUTTONS
         ===================================================== */

      body.colorbody span.button.fakebutton,
      body.colorbody-en span.button.fakebutton,
      body.colorbody .button.fakebutton,
      body.colorbody-en .button.fakebutton,
      body.colorbody input[type="submit"],
      body.colorbody-en input[type="submit"],
      body.colorbody input[type="button"],
      body.colorbody-en input[type="button"],
      body.colorbody button.btn,
      body.colorbody-en button.btn,
      body.colorbody a.btn,
      body.colorbody-en a.btn,
      body.colorbody .btn-primary,
      body.colorbody-en .btn-primary,
      body.colorbody .btn-info,
      body.colorbody-en .btn-info {
        border: 1px solid #173b2d !important;
        border-radius: 999px !important;
        background: #173b2d !important;
        background-image: none !important;
        color: #ffffff !important;
        box-shadow: none !important;
        text-shadow: none !important;
        transition:
          background-color 0.2s ease,
          border-color 0.2s ease,
          transform 0.2s ease,
          box-shadow 0.2s ease !important;
      }

      body.colorbody span.button.fakebutton,
      body.colorbody-en span.button.fakebutton,
      body.colorbody .button.fakebutton,
      body.colorbody-en .button.fakebutton {
        display: inline-flex !important;
        min-height: 34px !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 7px 16px !important;
        font-family: "Lato", Arial, sans-serif !important;
        font-size: 11px !important;
        font-weight: 700 !important;
        letter-spacing: 0.055em !important;
        line-height: 1 !important;
        text-transform: uppercase !important;
      }

      body.colorbody span.button.fakebutton:hover,
      body.colorbody-en span.button.fakebutton:hover,
      body.colorbody .button.fakebutton:hover,
      body.colorbody-en .button.fakebutton:hover,
      body.colorbody input[type="submit"]:hover,
      body.colorbody-en input[type="submit"]:hover,
      body.colorbody input[type="button"]:hover,
      body.colorbody-en input[type="button"]:hover,
      body.colorbody button.btn:hover,
      body.colorbody-en button.btn:hover,
      body.colorbody a.btn:hover,
      body.colorbody-en a.btn:hover,
      body.colorbody .btn-primary:hover,
      body.colorbody-en .btn-primary:hover,
      body.colorbody .btn-info:hover,
      body.colorbody-en .btn-info:hover {
        border-color: #214937 !important;
        background: #214937 !important;
        color: #ffffff !important;
        box-shadow: 0 8px 20px rgba(23, 59, 45, 0.14) !important;
        transform: translateY(-1px) !important;
      }

      body.colorbody a.textdeconone,
      body.colorbody-en a.textdeconone,
      body.colorbody a.textdeconone:hover,
      body.colorbody-en a.textdeconone:hover,
      body.colorbody a.textdeconone:focus,
      body.colorbody-en a.textdeconone:focus {
        text-decoration: none !important;
      }

      /* =====================================================
         TABLET
         ===================================================== */

      @media (max-width: 991px) {
        body.colorbody .b24-offer-slider .carousel,
        body.colorbody-en .b24-offer-slider .carousel,
        body.colorbody .b24-offer-slider .carousel-inner,
        body.colorbody-en .b24-offer-slider .carousel-inner,
        body.colorbody .b24-offer-slider .carousel-inner > .item,
        body.colorbody-en .b24-offer-slider .carousel-inner > .item,
        body.colorbody .b24-offer-slider img.bootstrap-carousel-img,
        body.colorbody-en .b24-offer-slider img.bootstrap-carousel-img {
          height: 290px !important;
          min-height: 290px !important;
        }
      }

      /* =====================================================
         MOBILE
         ===================================================== */

      @media (max-width: 767px) {
        body.colorbody .b24-offer-slider,
        body.colorbody-en .b24-offer-slider,
        body.colorbody .b24-offer-select,
        body.colorbody-en .b24-offer-select {
          width: 100% !important;
          max-width: 100% !important;
          float: none !important;
          padding-right: 10px !important;
          padding-left: 10px !important;
        }

        body.colorbody .b24-offer-slider .carousel,
        body.colorbody-en .b24-offer-slider .carousel,
        body.colorbody .b24-offer-slider .carousel-inner,
        body.colorbody-en .b24-offer-slider .carousel-inner,
        body.colorbody .b24-offer-slider .carousel-inner > .item,
        body.colorbody-en .b24-offer-slider .carousel-inner > .item,
        body.colorbody .b24-offer-slider img.bootstrap-carousel-img,
        body.colorbody-en .b24-offer-slider img.bootstrap-carousel-img {
          height: 260px !important;
          min-height: 260px !important;
        }

        body.colorbody .b24-offer-slider .carousel-control,
        body.colorbody-en .b24-offer-slider .carousel-control {
          width: 38px !important;
          height: 38px !important;
          margin-top: -19px !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     THB700.00 → THB 700.00
     ========================================================= */

  function formatCurrencyText(root) {
    const target = root || document.body;

    if (!target) {
      return;
    }

    const walker = document.createTreeWalker(
      target,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;

          if (!parent) {
            return NodeFilter.FILTER_REJECT;
          }

          if (
            parent.closest(
              "script, style, textarea, input, select, option, noscript"
            )
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return /THB(?=\d)/i.test(node.nodeValue || "")
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        }
      }
    );

    const nodes = [];
    let currentNode;

    while ((currentNode = walker.nextNode())) {
      nodes.push(currentNode);
    }

    nodes.forEach((node) => {
      node.nodeValue = node.nodeValue.replace(
        /THB\s*(?=\d)/gi,
        "THB "
      );
    });

    target
      .querySelectorAll(
        '[class*="price"], [id*="price"], .b24-offer-select, input'
      )
      .forEach((element) => {
        if (
          element instanceof HTMLInputElement &&
          /THB\s*\d/i.test(element.value)
        ) {
          element.value = element.value.replace(
            /THB\s*(?=\d)/gi,
            "THB "
          );
        }

        if (
          element.childElementCount === 0 &&
          /THB\s*\d/i.test(element.textContent || "")
        ) {
          element.textContent = element.textContent.replace(
            /THB\s*(?=\d)/gi,
            "THB "
          );
        }
      });
  }

  function enhancePage() {
    installStyles();
    formatCurrencyText(document.body);
  }

  function startObserver() {
    if (!document.body) {
      return;
    }

    let scheduled = false;

    const observer = new MutationObserver((mutations) => {
      const hasRelevantChanges = mutations.some((mutation) => {
        return (
          mutation.type === "childList" ||
          mutation.type === "characterData"
        );
      });

      if (!hasRelevantChanges || scheduled) {
        return;
      }

      scheduled = true;

      window.requestAnimationFrame(() => {
        scheduled = false;
        formatCurrencyText(document.body);
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  function init() {
    enhancePage();
    startObserver();

    window.setTimeout(enhancePage, 300);
    window.setTimeout(enhancePage, 800);
    window.setTimeout(enhancePage, 1500);
    window.setTimeout(enhancePage, 3000);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      { once: true }
    );
  } else {
    init();
  }
})();