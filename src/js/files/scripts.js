import * as flsFunctions from "./functions.js";

// window.addEventListener("click", function (e) {
//   function documentActions(e) {
//     const targetElement = e.target;
//   }
// })

window.addEventListener("load", function(e) {

  autoPaddingTop()
  galleryNav();
  blogCardReverse();
  blogsSearch()
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
        el.classList.add("active");
        showImagesByGroup(idGroup);
      });
    });
  }

  function showImagesByGroup(dataValue) {
    if (dataValue === "All") {
      allImages.forEach((element) => {
        element.style.display = "block";
      });
    } else {
      const array = document.querySelectorAll(`[data-group="${dataValue}"]`);
      allImages.forEach((element) => {
        element.style.display = "none";

        array.forEach((element) => {
          element.style.display = "block";
        });
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
  const blogForm = document.querySelector('.form-blog');
  const blogFormInput = document.querySelector('.form-blog__input');
  const blogsTitles = document.querySelectorAll(".card-blog__body h2");
  
  blogForm.addEventListener("keyup", () => {
    const inputValue = blogFormInput.value.toLowerCase();
    
    blogsTitles.forEach(title => {
      const card = title.closest(".card-blog");
      if (title.textContent.toLowerCase().includes(inputValue)) {
        card.style.display = "flex"; // Show card if title matches input
        card.style.display = "none"; 
      }
    });
  })
}