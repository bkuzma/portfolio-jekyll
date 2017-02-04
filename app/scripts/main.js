'use strict';
/*global jQuery*/

(function($) {
  $('.carousel').slick({
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    fade: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          fade: false,
          arrows: false
        }
      }
    ]
  });
})(jQuery);
