(() => {
  "use strict";

  if (window.location.pathname.includes("bookpay.php")) {
    return;
  }

  const ID = "vanara-booking-header";

  if (document.getElementById(ID)) return;

  const header = document.createElement("header");
  header.id = ID;
  header.className = "vb-header";

  header.innerHTML = `
    <div class="vb-header__background" aria-hidden="true">
      <img
        src="https://static.wixstatic.com/media/c090c7_40ac209a67c44939993603c82e4ef194~mv2.png"
        alt=""
      >
    </div>

    <div class="vb-header__overlay" aria-hidden="true"></div>

    <div class="vb-header__inner">

      <a
        class="vb-header__logo"
        href="https://www.vanarakc.com/"
        aria-label="Return to Vanara Eco Resort website"
      >
        <img
          src="https://static.wixstatic.com/media/c090c7_55a744e3e3fc4b759339092124b10dc0~mv2.jpg"
          alt="Vanara Eco Resort"
        >
      </a>

      <div class="vb-header__content">

        <span class="vb-header__eyebrow">
          Official Booking
        </span>

        <div
          class="vb-brand-signature"
          aria-label="Vanara Eco Resort, Koh Chang, Thailand"
        >
          <div class="vb-brand-signature__name">
            VANARA
          </div>

          <div class="vb-brand-signature__middle">
            <span aria-hidden="true"></span>
            <strong>ECO RESORT</strong>
            <span aria-hidden="true"></span>
          </div>

          <div class="vb-brand-signature__location">
            KOH CHANG • THAILAND
          </div>
        </div>

        <h1 class="vb-header__title">
          Your Stay in the Jungle<br>
          Begins Here
        </h1>

        <p class="vb-header__copy">
          Book directly with Vanara and choose the stay that best matches
          the way you want to experience Koh Chang.
        </p>

        <a
          class="vb-header__action"
          href="#b24scroller-container"
        >
          Check Availability
          <span aria-hidden="true">↓</span>
        </a>

      </div>

      <div
        class="vb-header__trust"
        aria-label="Direct booking benefits"
      >

        <span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3 4.5 6v5.5c0 4.7 3.1 7.8 7.5 9.5 4.4-1.7 7.5-4.8 7.5-9.5V6L12 3Z"></path>
            <path d="m8.5 12 2.2 2.2 4.8-5"></path>
          </svg>
          Secure booking
        </span>

        <span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16v11H4z"></path>
            <path d="M7 7V4h10v3"></path>
            <path d="M8 12h8"></path>
          </svg>
          Instant confirmation
        </span>

        <span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
            <path d="M12 7v5l3 2"></path>
          </svg>
          Direct support
        </span>

      </div>

    </div>
  `;

  function mountHeader() {
    if (document.getElementById(ID)) return;

    const target =
      document.querySelector(".b24fullcontainer") ||
      document.querySelector("#b24scroller-container") ||
      document.body.firstElementChild;

    if (target && target.parentNode) {
      target.parentNode.insertBefore(header, target);
    } else {
      document.body.prepend(header);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountHeader, {
      once: true
    });
  } else {
    mountHeader();
  }
})();