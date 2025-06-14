// Animasi scroll sederhana
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

// Inisialisasi animasi masuk
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.6s ease-out";
});
