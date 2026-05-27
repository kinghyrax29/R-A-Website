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

    slider.addEventListener("input", (e) => {

      const container = e.target.closest(".before-after-container");

      const afterWrapper =
        container.querySelector(".after-wrapper");

      afterWrapper.style.width = `${slider.value}%`;

    });

  });

});