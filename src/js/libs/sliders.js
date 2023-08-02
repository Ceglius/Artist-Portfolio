import Swiper, { Navigation, Pagination,Parallax } from "swiper";
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
      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

  
			pagination: {
				el: '.testimonials-swiper__dots',
				clickable: true,
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
