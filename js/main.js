// ===================================
// FUNCIONALIDAD PRINCIPAL
// ===================================

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll mejorado
  initializeSmoothScroll();

  // Animaciones al scroll
  initializeScrollAnimations();
});

// ===================================
// SMOOTH SCROLL
// ===================================

function initializeSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // No hacer nada si es solo "#"
      if (href === "#") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Cerrar menú si está abierto (para móvil)
        closeMobileMenu();
      }
    });
  });
}

// ===================================
// ANIMACIONES AL SCROLL
// ===================================

function initializeScrollAnimations() {
  const cards = document.querySelectorAll(".feature-card, .article-card");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
  });
}

// ===================================
// FUNCIONES AUXILIARES
// ===================================

function closeMobileMenu() {
  // Aquí iría la lógica para cerrar menú móvil si lo implementas
}

// ===================================
// EFECTOS DE BOTONES
// ===================================

function addButtonEffects() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.98)";
    });

    button.addEventListener("mouseup", function () {
      this.style.transform = "scale(1)";
    });
  });
}

// Inicializar efectos de botones
document.addEventListener("DOMContentLoaded", addButtonEffects);

// ===================================
// CONSOLE LOG - DEBUG
// ===================================

console.log("🎨 ENIUN - Soluciones Minimalistas cargado correctamente");
