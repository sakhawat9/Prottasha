var PATH = {};
(function ($) {
  "use strict";

  //  HERO SLIDER
  PATH.heroSlider = function () {
    var swiper = new Swiper(".hero-swiper", {
      speed: 3000,
      autoplay: {
        delay: 10000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };

  // CAUSES LIGHTBOX
  PATH.causesLightBox = function () {
    var $causesLightBox = $(".causes-lightbox");
    if ($causesLightBox.length) {
      $causesLightBox.magnificPopup({
        type: "image",
        mainClass: "mfp-fade",
        removalDelay: 160,
        fixedContentPos: true,
      });
    }
  };

  // CAUSES SLIDER
  PATH.causesSlider = function () {
    var cswiper = new Swiper(".causes-swiper", {
      slidesPerView: 3,
      spaceBetween: 0,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1199: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });
  };

  // TESTIMONIAL SLIDER
  PATH.sliderTestimonial = function () {
    var vswiper = new Swiper(".testimonialSwiper", {
      speed: 2000,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };
  // VOLUNTEERS SLIDER
  PATH.sliderVolunteers = function () {
    var vswiper = new Swiper(".volunteers-swiper", {
      slidesPerView: 4,
      spaceBetween: 0,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });
  };

  // Document ready function
  $(function () {
    PATH.causesLightBox();
    PATH.causesProgress();
  });

  // Window on load function
  $(window).on("load", function () {
    PATH.sliderTestimonial();
    PATH.sliderVolunteers();
    PATH.heroSlider();
    PATH.causesSlider();
    PATH.GalleryFilter();
    PATH.counterUp();
  });
})(jQuery);
