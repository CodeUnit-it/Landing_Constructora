document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const icon = hamburger.querySelector("i");

  // Función para togglear el menú
  const toggleMenu = () => {
    navLinks.classList.toggle("active");
    const isActive = navLinks.classList.contains("active");
    icon.classList.toggle("fa-bars", !isActive);
    icon.classList.toggle("fa-times", isActive);
  };

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que el click se propague al documento
    toggleMenu();
  });

  // Cerrar menú al clickear un enlace o afuera
  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) toggleMenu();
    });
  });

  // Lógica para el Acordeón de FAQ
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const faqItem = button.parentElement;

      // Cerrar otros items abiertos (opcional, si quieres que solo uno esté abierto a la vez)
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("active");
        }
      });

      // Alternar el item actual
      faqItem.classList.toggle("active");
    });
  });

  // 2. Carrusel Infinito (Tu lógica es correcta, solo la encapsulamos)
  const track = document.getElementById("track");
  if (track) {
    const cards = Array.from(track.children);
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
  }
});
