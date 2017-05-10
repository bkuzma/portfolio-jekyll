'use strict';
// /*global jQuery*/

// (function($) {
//   $('.carousel').slick({
//     dots: true,
//     infinite: true,
//     adaptiveHeight: true,
//     fade: true,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 769,
//         settings: {
//           fade: false,
//           arrows: false
//         }
//       }
//     ]
//   });
// })(jQuery);

/**
 * Execute a method once the DOM is ready.
 * @param  {Function} callback    Function to execute once the DOM is ready.
 */
function ready(callback) {
  // sanity check
  if (typeof callback !== 'function') {
    return null;
  }

  // if document is already loaded, run callback
  if (document.readyState === 'complete') {
    return callback();
  }

  // otherwise, wait until document is loaded
  document.addEventListener('DOMContentLoaded', callback, false);
}

(function() {

  function scaleProjectImages() {
    var mobileImages = Array.prototype.slice.call(
      document.querySelectorAll('.project-image')
    );

    mobileImages.forEach((mobileImage) => {
      var mobileImageWrapper = mobileImage.children[0];
      var mobileImageNaturalWidth = mobileImageWrapper.clientWidth;
      var parentContainer = mobileImage.parentNode;
      var parentWidth = parentContainer.clientWidth;
      var scale = Math.min(parentWidth / mobileImageNaturalWidth, 1);
      mobileImageWrapper.style.transform = `scale(${scale})`;

      var scaledRect = mobileImageWrapper.getBoundingClientRect();
      mobileImage.style.width = `${scaledRect.width}px`;
      mobileImage.style.height = `${scaledRect.height}px`;
    });
  }

  function onResize() {
    scaleProjectImages();
  }

  // wait until DOM is ready
  ready(function() {
    window.addEventListener('resize', onResize);
    scaleProjectImages();
  });
}());
