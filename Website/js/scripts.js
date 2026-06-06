// Smooth navbar shadow on scroll

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }

});


/* =========================================
   BEFORE / AFTER GALLERY SLIDER
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const sliders = document.querySelectorAll(".slider");

  sliders.forEach(slider => {

    const container = slider.closest(".before-after-container");
    const beforeWrapper = container.querySelector(".before-wrapper");

    // Handle range input
    slider.addEventListener("input", (e) => {
      beforeWrapper.style.width = `${slider.value}%`;
    });

    // Handle direct mouse dragging on image
    function updatePosition(e) {
      const rect = container.getBoundingClientRect();
      let x;

      if (e.type.startsWith("touch")) {
        x = e.touches[0].clientX - rect.left;
      } else {
        x = e.clientX - rect.left;
      }

      // Constrain x to container bounds
      x = Math.max(0, Math.min(x, rect.width));
      const percentage = (x / rect.width) * 100;

      beforeWrapper.style.width = `${percentage}%`;
      slider.value = percentage;
    }

    // Mouse events
    container.addEventListener("mousedown", () => {
      document.addEventListener("mousemove", updatePosition);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", updatePosition);
      }, { once: true });
    });

    // Touch events
    container.addEventListener("touchstart", () => {
      document.addEventListener("touchmove", updatePosition);
      document.addEventListener("touchend", () => {
        document.removeEventListener("touchmove", updatePosition);
      }, { once: true });
    });

  });

});