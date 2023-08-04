// Підключення базового набору функціоналу
import lightGallery from "lightgallery";

// Плагіни
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
import lgThumbnail from "lightgallery/plugins/thumbnail/lg-thumbnail.min.js";
// import lgZoom from "lightgallery/plugins/zoom/lg-zoom.min.js";

// Базові стилі
// import '../../scss/libs/gallery/lightgallery.scss';
// Стилі доповнень
// import '../../scss/libs/gallery/lg-thumbnail.scss';
// import '../../scss/libs/gallery/lg-video.scss';
// import '../../scss/libs/gallery/lg-autoplay.scss';
// import '../../scss/libs/gallery/lg-zoom.scss';
// import '../../scss/libs/gallery/lg-pager.scss';
// import '../../scss/libs/gallery/lg-fullscreen.scss';
// import '../../scss/libs/gallery/lg-share.scss';
// import '../../scss/libs/gallery/lg-comments.scss';s
// import '../../scss/libs/gallery/lg-rotate.scss';
// import '../../scss/libs/gallery/lg-medium-zoom.scss';
// import '../../scss/libs/gallery/lg-relative-caption.scss';

// Усі стилі
import "../../scss/libs/gallery/lightgallery-bundle.scss";


function initLightGallery() {
 
  if (document.querySelector("[data-gallery-slider]")) {
    
      lightGallery(document.querySelector("[data-gallery-slider]"), {
        licenseKey: "your_license_key",
        speed: 500,
        loop: true,
        plugins: [lgThumbnail],
        licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
        selector: 'a',
      });
  }

  if (document.querySelector("[data-gallery-main]")) {
   
    lightGallery(document.querySelector("[data-gallery-main]"), {
      licenseKey: "your_license_key",
      speed: 500,
      loop: true,
      plugins: [lgThumbnail],
      licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
      selector: '.card-gallery__thumbnail',
    });
}
}
initLightGallery()


