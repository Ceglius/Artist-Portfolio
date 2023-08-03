import Swiper, { Navigation, Pagination, Parallax, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

function initSliders() {
  if (document.querySelector(".swiper-latest")) {
    new Swiper(".swiper-latest", {
      observer: true,
      observeParents: true,
      slidesPerView: 1.5,
      spaceBetween: 15,
      autoHeight: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Брейкпоінти
      breakpoints: {
        480: {
          slidesPerView: 2.1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2.3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
  if (document.querySelector(".testimonials-swiper")) {
    new Swiper(".testimonials-swiper", {
      modules: [Pagination, Parallax],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      autoHeight: true,
      spaceBetween: 15,
      loop: true,

      pagination: {
        el: ".testimonials-swiper__dots",
        clickable: true,
      },
    });
  }
  if (document.querySelector(".slider")) {
    new Swiper(".slider", {
      modules: [Autoplay],
      direction: "horizontal",
      
      spaceBetween: 30,
      observer: true,
      speed: 10000,
      autoplay: {
        delay: 0,
      },

      breakpoints: {
      
        320: {
          slidesPerView: 1.3,
        },
       
        480: {
          slidesPerView: 1.5,
        },
        600: {
          slidesPerView: 1.6,
        },
        700: {
          slidesPerView: 1.8,
        },
        1000: {
          slidesPerView: 1.9,
        },
        1200: {
          slidesPerView: 2.1,
        },

        1400: {
          slidesPerView: 2.3,
        },
        1600: {
          slidesPerView: 2.7,
        },
        1800: {
          slidesPerView: 3,
        },
        1919: {
          slidesPerView: 3.3,
        },
      },
    });
  }
}

function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector(
        ".swiper-scrollbar"
      );
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function(e) {
  initSliders();
});
