$(document).ready(function() {
  $('#typewriter').typewriter({
    text: ["la artrosis", "problemas neurológicos", "la artritis", "dolores de manos"],
    typeDelay: 50,
    waitingTime: 2000,
    prefix: "",
    sufix: "",
    blinkSpeed: 1000
  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 10) {
      // if($(window).scrollTop() > ($( window ).height()-10)){
      $(".header").addClass("anycolor");
    } else {
      $(".header").removeClass("anycolor");
    }
  });

  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
  });
});
