/**
 * Fyrix — Interactive hero gradient + scroll animations
 * Respects prefers-reduced-motion
 */
(function () {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Interactive gradient (desktop only, skip if reduced motion)
  if (!reducedMotion && window.matchMedia("(min-width: 768px)").matches) {
    const heroBg = document.getElementById("hero-bg");
    if (heroBg) {
      document.addEventListener("mousemove", function (e) {
        const x = 50 + (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight) * 30;
        heroBg.style.setProperty("--gx", x + "%");
        heroBg.style.setProperty("--gy", y + "%");
      });
    }
  }

  // Scroll-in animations with Intersection Observer
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  document.querySelectorAll(".animate-in").forEach(function (el) {
    observer.observe(el);
  });
})();
