// import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
import KeenSlider from "./keen.js";

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

// -------------

// const keenSlider2 = new KeenSlider(
//   "#keen-slider2",
//   {
//     loop: true,
//     slides: {
//       origin: "center",
//       perView: 1.25,
//       spacing: 16,
//     },
//     breakpoints: {
//       "(min-width: 1024px)": {
//         slides: {
//           origin: "auto",
//           perView: 2.5,
//           spacing: 32,
//         },
//       },
//     },
//   },
//   []
// );

// const keenSliderPrevious2 = document.getElementById("keen-slider-previous2");
// const keenSliderNext2 = document.getElementById("keen-slider-next2");

// keenSliderPrevious2.addEventListener("click", () => keenSlider2.prev());
// keenSliderNext2.addEventListener("click", () => keenSlider2.next());

// ---------------

// const header = document.querySelector("header");
// const menu = document.querySelector("#menu");
// const logoBlack = document.querySelector(".logo-black");
// const logoWhite = document.querySelector(".logo-white");

// const toggleHeaderState = () => {
//   const isScrolled = window.scrollY !== 0;
//   header.classList.toggle("scrolled", isScrolled);
//   logoBlack.classList.toggle("hidden", !isScrolled);
//   logoWhite.classList.toggle("hidden", isScrolled);
// };

// window.addEventListener("scroll", toggleHeaderState);

// document.addEventListener("DOMContentLoaded", toggleHeaderState);

// ---------------
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (!sections.length) return;

  const windowOffset = window.innerHeight * 0.7;

  const toggleSectionVisibility = (section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isVisible = sectionTop - windowOffset < 0;
    section.classList.toggle("animate", isVisible);
  };

  const animaScroll = () => sections.forEach(toggleSectionVisibility);

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
document.querySelectorAll(".scrollto").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// --------------- back to top
const backToTop = document.querySelector("#back-to-top");
backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ----
const selectWhite = document.querySelectorAll(".select-white");
selectWhite.forEach((select) =>
  select.addEventListener("change", () => {
    select.style.color = "white";
  })
);

// ---- Swiper
const swiper = new Swiper(".swiper", {
  slidesPerGroupSkip: 3,
  slidesPerGroup: 1,
  spaceBetween: 12,
  slidesPerView: "auto",
  centeredSlides: false,
  allowTouchMove: true,
  direction: "horizontal",
  mousewheel: {
    invert: false,
  },

  breakpoints: {
    1024: {
      spaceBetween: 24,
      slidesPerView: "auto",
    },
  },

  // Optional Navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ---- load
// window.addEventListener("load", function () {
//   // Let the rotate animation run for 3 seconds
//   setTimeout(function () {
//     // After 3 seconds, remove the rotate animation and add the expand animation
//     const logo = document.getElementById("logo-animation");
//     logo.classList.remove("logo-rotate");
//     logo.classList.add("logo-expand");

//     // Wait for the expand animation to complete (1 second)
//     setTimeout(function () {
//       // Hide the logo spinner and reveal the content
//       document.getElementById("logo-spinner").style.display = "none";
//       document.getElementById("content").style.opacity = "1";
//     }, 1000);
//   }, 1500);
// });

document.getElementById("logo-spinner").style.display = "none";
document.getElementById("content").style.opacity = "1";