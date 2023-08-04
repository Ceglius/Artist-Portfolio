


// window.addEventListener("click", function (e) {
//   function documentActions(e) {
//     const targetElement = e.target;
//   }
// })

window.addEventListener("load", function (e) {
  const blogCards = this.document.querySelectorAll(".card-blog")
  if (blogCards) {
    blogCards.forEach((el, i) => {
      if (i % 2 !== 0) {
          el.classList.add("alt")
        }
    });
  }
  const pageMainConten = document.querySelector('.page');
  const firstChild = pageMainConten.firstElementChild.classList;
  if (firstChild.contains("page__hero")) return
  else firstChild.add("section-padding-top") 

})


// galery filters





