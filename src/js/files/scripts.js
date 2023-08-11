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
