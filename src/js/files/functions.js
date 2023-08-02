export let isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

export function removeClasses(array, className) {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.remove(className);
  }
}

export function placeholder(type, placeholder) {
  const input = document.querySelector(`input[type="${type}"]`);

  input.addEventListener("focus", function() {
    this.removeAttribute("placeholder");
  });

  input.addEventListener("blur", function() {
    if (!this.value) {
      this.setAttribute("placeholder", `${placeholder}`);
    }
  });
}

export function menuInit() {
  if (document.querySelector(".icon-menu")) {
    document.addEventListener("click", function(e) {
      if (e.target.closest(".icon-menu")) {
        document.documentElement.classList.toggle("menu-open");
        document.querySelector(".menu").classList.toggle("_active");
        // document.querySelector("body").classList.toggle("_locked")
        // window.addEventListener("resize", () => {
        //   document.querySelector("body").classList.remove("_locked");
        // })
      }
    });
  }
}

export function hideHeader() {
  let prevScrollPos = window.scrollY;

function handleScroll() {
  const currentScrollPos = window.scrollY;
  const header = document.querySelector(".header");

  if (prevScrollPos > currentScrollPos) {
    header.classList.add("_visible");
    header.classList.remove("_hidden");
  } else {
    header.classList.add("_hidden");
    header.classList.remove("_visible");
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener("scroll", handleScroll);
}

