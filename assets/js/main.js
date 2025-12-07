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

  // GAMES DATA
  const games = [
    { name: "Brawl Stars Profile", img: "assets/images/project/w1.webp", id: "#8UCGUJVLV", btn: "Copy Brawl Stars ID" },
    { name: "MLBB Profile", img: "assets/images/project/w2.webp", id: "1068788100(13266)", btn: "Copy MLBB ID" },
    { name: "Indus BR Profile", img: "assets/images/project/w6.webp", id: "UQHS9BQV", btn: "Copy Indus BR ID" },
    { name: "Asphalt Legends Profile", img: "assets/images/project/w3.webp", id: "u-hd4045", btn: "Copy Asphalt Legends ID" },
    { name: "Shadow Fight 4 Profile", img: "assets/images/project/w4.webp", id: "5679205", btn: "Copy Shadow Fight 4 ID" },
    { name: "Valorant Profile", img: "assets/images/project/w7.webp", id: "AI DRAGO#9921", btn: "Copy Valorant ID" },
    { name: "Free Fire Profile", img: "assets/images/project/w10.webp", id: "None", btn: "Copy Free Fire ID" },
    { name: "BGMI Profile", img: "assets/images/project/w11.webp", id: "None", btn: "Copy BGMI ID" },
    { name: "Roblox Profile", img: "assets/images/project/w12.webp", id: "None", btn: "Copy Roblox ID" },
    { name: "Pokemon Unite Profile", img: "assets/images/project/w5.webp", id: "none", btn: "Copy Pokemon Unite ID" }
  ];

  // RENDER SLIDES
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  if (swiperWrapper) {
    swiperWrapper.innerHTML = games.map((game, index) => `
      <div class="swiper-slide" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="${index * 100}">
        <div class="project-info d-flex flex-column align-items-center justify-content-center">
          <img src="${game.img}" class="img-fluid" alt="${game.name}" data-id="${game.id}">
          <button class="copy-btn btn custom-btn custom-btn-bg custom-btn-link mb-5">${game.btn}</button>
        </div>
      </div>
    `).join('');

    // INITIALIZE SWIPER AFTER CONTENT IS LOADED
    // 3D Coverflow Effect
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      speed: 800, // Smoother transition speed
      observer: true,
      observeParents: true,
      coverflowEffect: {
        rotate: 30, // Reduced rotation for smoother feel
        stretch: 0,
        depth: 50,  // Reduced depth to prevent extreme scaling
        modifier: 1,
        slideShadows: true,
      },
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
      // Note: Breakpoints are less strict in coverflow mode, slidesPerView: 'auto' handles responsiveness naturally
    });

    // INITIALIZE AOS (Animate On Scroll)
    AOS.init();

    // EVENT DELEGATION FOR COPY BUTTONS
    swiperWrapper.addEventListener('click', function (e) {
      if (e.target.classList.contains('copy-btn')) {
        const button = e.target;
        const image = button.previousElementSibling;
        const idText = image.getAttribute('data-id');

        if (!idText || idText.toLowerCase() === "none") {
          alert('No ID available to copy.');
          return;
        }

        navigator.clipboard.writeText(idText).then(function () {
          alert('ID copied: ' + idText);
        }, function (err) {
          console.error('Copy failed: ', err);
          alert('Failed to copy ID.');
        });
      }
    });
  }
});

/* Tooltips are handled by browser title attribute or Bootstrap 5 data-bs-toggle="tooltip" if initialized */


