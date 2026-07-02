/* CASA VOGUE — interactions */
(function () {
  "use strict";

  /* ---- Current year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Sticky nav state ---- */
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.classList.toggle("open", open);
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", function () {
      setMenu(!menu.classList.contains("open"));
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
  }

  /* ---- Scroll reveal ---- */
  var reveal = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && reveal.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Newsletter (demo, no backend) ---- */
  var nlForm = document.querySelector("[data-newsletter]");
  if (nlForm) {
    nlForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = nlForm.parentElement.querySelector(".cta-msg");
      var input = nlForm.querySelector("input");
      if (input.checkValidity()) {
        if (msg) msg.textContent = "Merci ! Votre nuancier d'inspiration arrive dans votre boîte mail.";
        nlForm.reset();
      } else {
        if (msg) msg.textContent = "Merci d'indiquer une adresse e-mail valide.";
      }
    });
  }

  /* ---- Contact form (demo, no backend) ---- */
  var contactForm = document.querySelector("[data-contact]");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = contactForm.querySelector(".form-msg");
      if (contactForm.checkValidity()) {
        if (msg) msg.textContent = "Merci ! Votre demande a bien été enregistrée — nous vous répondons sous 24 h.";
        contactForm.reset();
      } else {
        if (msg) {
          msg.style.color = "var(--terracotta-d)";
          msg.textContent = "Veuillez compléter les champs obligatoires.";
        }
        contactForm.reportValidity();
      }
    });
  }
})();
