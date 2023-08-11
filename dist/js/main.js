import * as flsFunctions from "./files/functions.js";
flsFunctions.menuInit()
flsFunctions.hideHeader()
flsFunctions.placeholder()

window.addEventListener("load", function(e) {
  if (fsLightbox) {
    fsLightbox.props.showThumbsOnMount = true;
  }
  autoPaddingTop();
  galleryNav();
  blogCardReverse();
  blogsSearch();
});

function blogCardReverse() {
  const blogCards = document.querySelectorAll(".card-blog");
  if (blogCards) {
    blogCards.forEach((el, i) => {
      if (i % 2 !== 0) {
        el.classList.add("alt");
      }
    });
  }
}

function galleryNav() {
  const galleryNav = document.querySelectorAll(".gallery__nav div");
  const allImages = document.querySelectorAll(".gallery__card");

  if (galleryNav) {
    galleryNav.forEach((el, _i, arr) => {
      el.addEventListener("click", function() {
        const idGroup = el.getAttribute("data-group");

        flsFunctions.removeClasses(arr, "active");
        showImagesByGroup(idGroup);

        const allVisible = document.querySelectorAll(".card-gallery.visible a");

        const allImageUrl = [...allVisible].map((data) =>
          data.setAttribute(`data-fslightbox`, `${idGroup}`)
        );
        refreshFsLightbox();
        fsLightbox.props.showThumbsOnMount = true;
        el.classList.add("active");
      });
    });
  }

  function showImagesByGroup(dataValue) {
    if (dataValue === "All") {
      allImages.forEach((element) => {
        element.classList.add("visible");
        element.classList.remove("hidden");
      });
    } else {
      const array = document.querySelectorAll(`[data-group="${dataValue}"]`);
      allImages.forEach((element) => {
        element.classList.add("hidden");
        element.classList.remove("visible");
      });
      array.forEach((element) => {
        element.classList.add("visible");
        element.classList.remove("hidden");
      });
    }
  }
}

function autoPaddingTop() {
  const pageMainContent = document.querySelector(".umb-block-list");
  const page = document.querySelector(".page");

  if (
    page.firstElementChild.classList.contains("umb-block-list") &&
    pageMainContent.childElementCount !== 0
  ) {
    const firstChild = pageMainContent.firstElementChild;
    if (firstChild.classList.contains("page__hero")) return;
    else firstChild.classList.add("section-padding-top");
  } else {
    const firstChild = page.firstElementChild;
    if (firstChild.classList.contains("page__hero")) return;
    else firstChild.classList.add("section-padding-top");
  }
}

function blogsSearch() {
  const blogForm = document.querySelector(".form-blog");
  const blogFormInput = document.querySelector(".form-blog__input");
  const blogsTitles = document.querySelectorAll(".card-blog__body h2");

  if (blogForm) {
    blogForm.addEventListener("keyup", () => {
      const inputValue = blogFormInput.value.toLowerCase();

      blogsTitles.forEach((title) => {
        const card = title.closest(".card-blog");
        if (title.textContent.toLowerCase().includes(inputValue)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
}

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
      speed:  40000,
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
