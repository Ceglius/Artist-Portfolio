import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function amimations() {
  let mm = gsap.matchMedia();
  gsap.registerPlugin(ScrollTrigger);

  // hero section
  mm.add("(min-width: 768px)", () => {
    const menuItems = document.querySelector('.menu__items');
    
    
  });
}

amimations();
