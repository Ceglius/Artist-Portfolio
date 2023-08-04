


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

  
})




