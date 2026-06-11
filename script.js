document.addEventListener("DOMContentLoaded", () => {

  // NAVBAR SHADOW ON SCROLL
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
      navbar.style.background = "rgba(255,245,230,0.98)";
    } else {
      navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,.08)";
      navbar.style.background = "rgba(255,245,230,.95)";
    }
  });

  // CARD ANIMATION (SAFE + PERFORMANCE OPTIMIZED)
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  cards.forEach((card) => {
    card.classList.add("hidden");
    observer.observe(card);
  });

});
