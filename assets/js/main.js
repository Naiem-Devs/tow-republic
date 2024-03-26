(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
    $('body').toggleClass('overly');   
  }); 


 $('.closeBtn').click( function (event){ 
    event.preventDefault()
    $(".humbergar").toggleClass('active');  
  }); 


  // owlCarousel
  $(".car__slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  });



 
})(jQuery);
