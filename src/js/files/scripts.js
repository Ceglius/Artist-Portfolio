import * as flsFunctions from "./functions.js";
// window.addEventListener("click", function (e) {
//   function documentActions(e) {
//     const targetElement = e.target;
//   }
// })

window.addEventListener("load", function(e) {
  const blogCards = this.document.querySelectorAll(".card-blog");
  if (blogCards) {
    blogCards.forEach((el, i) => {
      if (i % 2 !== 0) {
        el.classList.add("alt");
      }
    });
  }
  const pageMainConten = document.querySelector(".umb-block-list");

  if (pageMainConten) {
    const firstChild = pageMainConten.firstElementChild.classList;
    if (firstChild.contains("page__hero")) return;
    else firstChild.add("section-padding-top");
  }

  galleryNavigation()
});


function galleryNavigation() {
  const galleryNav = document.querySelectorAll('.gallery__nav div');
const allImages = document.querySelectorAll(".gallery__card");

if (galleryNav) {

  galleryNav.forEach((el, _i, arr) => {

    el.addEventListener("click", function () {
      console.log(el.dataset.group);
      const idGroup = el.getAttribute("data-group");

        flsFunctions.removeClasses(arr, "active")
        el.classList.add("active")
        showImagesByGroup(idGroup)
      })
    })
}

function showImagesByGroup(dataValue) {
  const array = document.querySelectorAll(`[data-group=${dataValue}]`)
 
   
    allImages.forEach(element => {
      element.style.display = 'none';
    });
  
    
    array.forEach(element => {
      element.style.display = 'block';
    });
}
}
