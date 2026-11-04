(() => {
  "use strict";

  if (window.location.pathname.includes("bookpay.php")) {
    return;
  }

  const SECTION_ID = "vanara-booking-intro";

  function createIntro() {
    const section = document.createElement("section");

    section.id = SECTION_ID;
    section.className = "vb-booking-intro";
    section.setAttribute(
      "aria-labelledby",
      "vb-booking-intro-title"
    );

    section.innerHTML = `
      <div class="vb-booking-intro__inner">

        <div class="vb-booking-intro__heading">

          <span class="vb-booking-intro__eyebrow">
            Official Direct Booking
          </span>

          <h2 id="vb-booking-intro-title">
            Non-Refundable Direct Rates Only
          </h2>

          <p>
            Book the best direct rate with Vanara. Full payment is required
            when you book, and direct reservations cannot be refunded once confirmed.
          </p>

        </div>

        <div class="vb-booking-intro__benefits">

          <article class="vb-booking-benefit">

            <div class="vb-booking-benefit__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 7.5h16v10H4z"></path>
                <path d="M7 7.5V5h10v2.5"></path>
                <path d="M8 12h8"></path>
              </svg>
            </div>

            <h3>Official Direct Rates</h3>

            <p>
              View the rates and availability offered directly by Vanara.
            </p>

          </article>

          <article class="vb-booking-benefit">

            <div class="vb-booking-benefit__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3 4.5 6v5.5c0 4.7 3.1 7.8 7.5 9.5 4.4-1.7 7.5-4.8 7.5-9.5V6L12 3Z"></path>
                <path d="m8.5 12 2.2 2.2 4.8-5"></path>
              </svg>
            </div>

            <h3>Secure Booking</h3>

            <p>
              Complete your reservation through our protected booking system.
            </p>

          </article>

          <article class="vb-booking-benefit">

            <div class="vb-booking-benefit__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 6h14v12H5z"></path>
                <path d="m6 8 6 5 6-5"></path>
              </svg>
            </div>

            <h3>Instant Confirmation</h3>

            <p>
              Receive your booking confirmation as soon as the reservation is completed.
            </p>

          </article>

          <article class="vb-booking-benefit">

            <div class="vb-booking-benefit__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 12a8 8 0 0 1 16 0"></path>
                <path d="M4 12v5h3v-5H4Z"></path>
                <path d="M17 12v5h3v-5h-3Z"></path>
                <path d="M17 18c-1 2-2.8 3-5 3"></path>
              </svg>
            </div>

            <h3>Local Support</h3>

            <p>
              Contact our Koh Chang team directly before and during your stay.
            </p>

          </article>

        </div>

        <section
          class="vb-booking-policy"
          aria-labelledby="vb-booking-policy-title"
        >
          <div class="vb-booking-policy__heading">
            <span class="vb-booking-policy__eyebrow">
              Direct Booking Terms
            </span>

            <h3 id="vb-booking-policy-title">
              Direct Bookings Are Non-Refundable
            </h3>
          </div>

          <div class="vb-booking-policy__rules">
            <div class="vb-booking-policy__rule">
              <strong>Our Best Direct Rate</strong>

              <p>
                Book directly for a better rate than our partner booking sites.
                In return, direct reservations require full payment when you book
                and are non-refundable once confirmed.
              </p>

              <p class="vb-booking-policy__note">
                Your reservation is confirmed only after payment has been completed successfully.
              </p>
            </div>

            <div class="vb-booking-policy__rule">
              <strong>Need More Flexibility?</strong>

              <p>
                For refundable or more flexible booking terms, we recommend booking
                through Booking.com, Agoda, Airbnb, Trip.com, Traveloka or Expedia,
                subject to the terms shown on each platform.
              </p>

              <div class="vb-booking-policy__partners" aria-label="Our booking partners">
                <span class="vb-booking-policy__partner">
                  <img src="https://vanararetreat.com/assets/img/booking-partners/bookingdotcom.svg" alt="Booking.com" />
                  <span>Booking.com</span>
                </span>
                <span class="vb-booking-policy__partner vb-booking-policy__partner--wordmark">Agoda</span>
                <span class="vb-booking-policy__partner">
                  <img src="https://vanararetreat.com/assets/img/booking-partners/airbnb.svg" alt="Airbnb" />
                  <span>Airbnb</span>
                </span>
                <span class="vb-booking-policy__partner">
                  <img src="https://vanararetreat.com/assets/img/booking-partners/tripdotcom.svg" alt="Trip.com" />
                  <span>Trip.com</span>
                </span>
                <span class="vb-booking-policy__partner vb-booking-policy__partner--wordmark">Traveloka</span>
                <span class="vb-booking-policy__partner">
                  <img src="https://vanararetreat.com/assets/img/booking-partners/expedia.svg" alt="Expedia" />
                  <span>Expedia</span>
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
    `;

    return section;
  }

  function mountIntro() {
    if (document.getElementById(SECTION_ID)) {
      return true;
    }

    const selector =
      document.querySelector(".b24fullcontainer-selector") ||
      document.querySelector("#b24scroller-container");

    if (!selector) {
      return false;
    }

    const intro = createIntro();

    const insertionTarget =
      selector.classList.contains("b24fullcontainer-selector")
        ? selector
        : selector.closest(".b24fullcontainer-selector") || selector;

    insertionTarget.parentNode.insertBefore(
      intro,
      insertionTarget
    );

    return true;
  }

  function initialise() {
    if (mountIntro()) {
      return;
    }

    const observer = new MutationObserver(() => {
      if (mountIntro()) {
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });

    window.setTimeout(() => {
      observer.disconnect();
    }, 12000);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialise,
      { once: true }
    );
  } else {
    initialise();
  }
})();
