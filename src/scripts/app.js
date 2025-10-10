"use strict";

/////////// IMPORT LIBRAIRIE

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; 

gsap.registerPlugin(SplitText, ScrollTrigger); 


//////////// ANIMATIONS

// window.addEventListener("DOMContentLoaded", () => {

//     document.fonts.ready.then(() => {
//         const split = new SplitText(".head__title--big", { type: "chars" });
//         const splitChars = split.chars; 
    
//         gsap.from(splitChars, {
//             x: -50, 
//             opacity: 0, 
//             duration: 1.3, 
//             stagger: 0.3
//         }); 
//     });
// }); 


// const letterTitle = document.querySelectorAll('.head__title--span'); 

// gsap.from(letterTitle, {
//     x: -50, 
//     opacity: 0, 
//     duration: 1, 
//     stagger: 0.3, 
//     ease: "power2.inOut"
// }); 
