"use strict";

// COLOR MODE (Vanilla JS)
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const colorModeBtn = document.querySelector('.color-mode');
  const colorModeIcon = document.querySelector('.color-mode-icon');

  // Default dark mode
  body.classList.add('dark-mode');
  if (colorModeIcon) colorModeIcon.classList.add('active');

  if (colorModeBtn) {
    colorModeBtn.addEventListener('click', function () {
      if (colorModeIcon) colorModeIcon.classList.toggle('active');
      body.classList.toggle('dark-mode');
    });
  }

  // HEADER (Headroom.js)
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const headroom = new Headroom(navbar);
    headroom.init();
  }

  // PROJECT SLIDER (Swiper.js)
  if (document.querySelector('.mySwiper')) {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 }, // Tablet
        1024: { slidesPerView: 2 } // Desktop
      }
    });
  }
});

/* Tooltips are handled by browser title attribute or Bootstrap 5 data-bs-toggle="tooltip" if initialized */

function copyAltText(button) {
  // Get the image element from the clicked button's parent
  const image = button.previousElementSibling; // The img element is the previous sibling
  const idText = image.getAttribute('data-id'); // Get the data-id of the image

  if (!idText || idText.toLowerCase() === "none") {
    alert('No ID available to copy.');
    return;
  }

  // Use the modern Clipboard API
  navigator.clipboard.writeText(idText).then(function () {
    // Show an alert or message to indicate that the ID has been copied
    alert('ID copied: ' + idText);
  }, function (err) {
    console.error('Could not copy text: ', err);
    // Fallback or error handling
    alert('Failed to copy ID.');
  });
}
