(function ($) {

  "use strict";

    // COLOR MODE
$(document).ready(function() {
    // Set the dark mode on page load (by default)
    $('body').addClass('dark-mode');
    $('.color-mode-icon').addClass('active');

    // Toggle between dark and light mode when the button is clicked
    $('.color-mode').click(function() {
        $('.color-mode-icon').toggleClass('active');
        $('body').toggleClass('dark-mode');
    });
});


    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
