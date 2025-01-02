export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-init]");
  console.log(sections);
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
