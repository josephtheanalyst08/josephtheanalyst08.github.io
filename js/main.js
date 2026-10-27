/* =====================================================================
   main.js – shared by every page (index, about-me, projects)
   Does 3 small jobs:
     1. Marks the page as "JS enabled" (so the reveal animation works)
     2. Opens/closes the mobile menu
     3. Reveals sections as you scroll
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. Tell the CSS that JavaScript is running.
   The reveal animation only hides elements when this class exists, so
   visitors with JavaScript turned off still see the whole page.
   --------------------------------------------------------------------- */
document.documentElement.classList.add("js");


/* ---------------------------------------------------------------------
   2. Mobile menu (hamburger button)
   Clicking the button toggles ".is-open" on the header; the CSS then
   shows or hides the links. We also update aria-expanded for
   screen readers.
   --------------------------------------------------------------------- */
(function setupMobileMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (!header || !toggle) return;

  // Open / close when the button is clicked
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close the menu after a link is tapped
  header.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close the menu if the screen is resized back to desktop width
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();


/* ---------------------------------------------------------------------
   3. Scroll-reveal animation
   Every element with the class "reveal" fades/slides in the first time
   it scrolls into view. This is the only animation on the site.
   To animate something new, just add class="reveal" to it in the HTML.
   --------------------------------------------------------------------- */
(function setupReveal() {
  const items = document.querySelectorAll(".reveal, .reveal-group");
  if (!items.length) return;

  // Very old browsers: skip the animation and show everything
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
})();
