import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";

const keenSliderActive = document.getElementById("keen-slider-active");
const keenSliderCount = document.getElementById("keen-slider-count");

const keenSlider = new KeenSlider(
  "#keen-slider",
  {
    loop: true,
    defaultAnimation: {
      duration: 750,
    },
    slides: {
      origin: "center",
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          origin: "center",
          perView: 1.5,
          spacing: 16,
        },
      },
      "(min-width: 768px)": {
        slides: {
          origin: "center",
          perView: 1.75,
          spacing: 16,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          origin: "center",
          perView: 3,
          spacing: 16,
        },
      },
    },
    created(slider) {
      slider.slides[slider.track.details.rel].classList.remove("opacity-40");

      keenSliderActive.innerText = slider.track.details.rel + 1;
      keenSliderCount.innerText = slider.slides.length;
    },
    slideChanged(slider) {
      slider.slides.forEach((slide) => slide.classList.add("opacity-40"));

      slider.slides[slider.track.details.rel].classList.remove("opacity-40");

      keenSliderActive.innerText = slider.track.details.rel + 1;
    },
  },
  []
);

const keenSliderPrevious = document.getElementById("keen-slider-previous");
const keenSliderNext = document.getElementById("keen-slider-next");

keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
keenSliderNext.addEventListener("click", () => keenSlider.next());

// ---------------

const header = document.querySelector("header");
const menu = document.querySelector("#menu");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    header.classList.remove("scrolled");
  } else {
    header.classList.add("scrolled");
  }
});

// ---------------
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (!sections.length) return;
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("animate");
      } else {
        section.classList.remove("animate");
      }
    });
  }
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll();

//-------------------------
document.querySelectorAll('[role="tab"]').forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabList = tab.closest('[role="tablist"]');
    const tabs = tabList.querySelectorAll('[role="tab"]');
    const panels = tabList.nextElementSibling.children;

    // Reset all tabs and panels
    tabs.forEach((t) => {
      t.classList.remove("border-tertiary", "text-tertiary", "bg-tertiary/10");
      t.classList.add("border-transparent", "text-slate-700", "bg-transparent");
      t.setAttribute("aria-selected", "false");
      t.setAttribute("tabindex", "-1");
    });

    Array.from(panels).forEach((panel) => {
      panel.setAttribute("aria-hidden", "true");
      panel.classList.add("hidden");
    });

    // Activate the clicked tab
    tab.classList.add("border-tertiary", "text-tertiary", "bg-tertiary/10");
    tab.classList.remove("border-transparent", "text-slate-700");
    tab.setAttribute("aria-selected", "true");
    tab.setAttribute("tabindex", "0");

    // Show the associated panel
    const panel = document.getElementById(tab.getAttribute("aria-controls"));
    panel.setAttribute("aria-hidden", "false");
    panel.classList.remove("hidden");
  });
});

// --------------- smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
