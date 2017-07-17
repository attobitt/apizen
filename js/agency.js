// Agency Theme JavaScript

(function($) {
  "use strict"; // Start of use strict

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 40)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 40
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  // Offset for Main Navigation
  // $('#mainNav').affix({
  //   offset: {
  //     top: 40
  //   }
  // })

  // $('.slider').sss({
  //   slideShow: true, // Set to false to prevent SSS from automatically animating.
  //   startOn: 0, // Slide to display first. Uses array notation (0 = first slide).
  //   transition: 500, // Length (in milliseconds) of the fade transition.
  //   speed: 3500, // Slideshow speed in milliseconds.
  //   showNav: true // Set to false to hide navigation arrows.
  // });

  // $('.static-slider').hide();
  $(document).ready(function(){
    $('.bxslider').bxSlider({
      auto: true,
      // autoControls: true
    });
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() < 150) {
      //  $("#header-2").show();
      console.log("at the top");
      $('.static-slider').hide();
      $('.slider').show();
    } else {
      //  $("#header-2").hide();
      console.log("not top");
      $('.static-slider').show();
      $('.slider').hide();
    }
  });


})(jQuery); // End of use strict
