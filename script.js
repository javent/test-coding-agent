document.documentElement.classList.add("js");

const renderMarkFallback = (container) => {
  container.innerHTML = `
    <svg viewBox="0 0 32 32" role="img" aria-label="John Avent">
      <path class="mark-fallback" d="M7.1 9.7c2.7-3.4 7.4-4.7 11.5-3.2 4.2 1.5 6.9 5.7 6.4 10.1-.6 5.5-5.5 9.6-11 9.1-4.7-.4-8.5-4.1-9-8.8"/>
      <path class="mark-fallback" d="M9.3 15.2c1.7 3.6 5.9 5.2 9.5 3.5 1.3-.6 2.4-1.6 3.1-2.8"/>
    </svg>`;
};

const initMark = () => {
  const container = document.querySelector("#logo-animation");
  if (!container) return;

  renderMarkFallback(container);

  if (!window.lottie) return;

  const animation = window.lottie.loadAnimation({
    container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://framerusercontent.com/assets/QVFPd2XOOizMatJypJKZxkRxrY.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: false,
    },
  });

  animation.addEventListener("data_failed", () => renderMarkFallback(container));
};

const initReveals = () => {
  const elements = [...document.querySelectorAll(".reveal, .reveal-card")];

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const aboveFold = elements.filter((element) => element.getBoundingClientRect().top < window.innerHeight * 0.95);
  aboveFold.forEach((element, index) => {
    window.setTimeout(() => element.classList.add("is-visible"), 60 + index * 75);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6%", threshold: 0.08 },
  );

  elements.filter((element) => !aboveFold.includes(element)).forEach((element) => observer.observe(element));
};

initMark();
initReveals();
