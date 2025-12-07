(function ($) {

  "use strict";

  // COLOR MODE
  $(document).ready(function () {
    // Set the dark mode on page load (by default)
    $('body').addClass('dark-mode');
    $('.color-mode-icon').addClass('active');

    // Toggle between dark and light mode when the button is clicked
    $('.color-mode').click(function () {
      $('.color-mode-icon').toggleClass('active');
      $('body').toggleClass('dark-mode');
    });
  });


  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL (Handled by CSS native scroll-behavior)
  // Legacy support for offset if needed can be added here, but CSS scroll-margin-top is preferred.

  // TOOLTIP
  $('.social-links a').tooltip();

})(jQuery);

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
