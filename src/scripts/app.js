"use strict";

/////////// IMPORT LIBRAIRIE

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; 

gsap.registerPlugin(SplitText, ScrollTrigger); 

//console.log(SplitText);


//////////// ANIMATIONS


if(document.fonts){

    const split = new SplitText('.head__title--big', { type: 'chars' }); 

    gsap.from(split.chars, {
        x: -50, 
        opacity: 0, 
        duration: 0.6, 
        stagger: 0.2
    }); 

    gsap.from('.head__title--small', {
        scale: 0.5, 
        opacity: 0, 
        delay: 1.5, 
        duration: 0.8, 
        ease: 'power2.out'
    });
}

const introText = document.querySelector('.intro__text'); 
    const splitIntro = new SplitText('.intro__text', { type: 'words' }); 
    const splitIntroDesk = new SplitText('.intro__text', { type: 'lines' }); 

if (window.innerWidth < 768) {

    

    if(introText) {

    gsap.from(splitIntro.words, {
        scrollTrigger: {
            trigger: '.intro', 
            start: 'top 80%', 
            toggleActions: 'restart reset restart reset', 
        }, 
        y: 100, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: 'power2.out'
    }); 
    } 

    gsap.from('.intro__text--mark', {
        scrollTrigger: {
            trigger: 'intro', 
            start: 'top 50%', 
            toggleActions: 'restart reset restart reset'
        }, 
        delay: 0.8,  
        stagger: 0.5,
        backgroundImage: 'linear-gradient(to left, rgba(235, 242, 240, 0), rgba(235, 242, 240, 0), rgba(235, 242, 240, 0), rgba(235, 242, 240, 0), rgba(235, 242, 240, 0))' , 
        ease: 'power2.out'
    }); 

} else {
    gsap.from(splitIntroDesk.lines, {
        scrollTrigger: {
            trigger: '.intro', 
            start: 'top 60%', 
            toggleActions: 'restart reset restart reset', 
        }, 
        y: 100, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: 'power2.out'
    }); 

    gsap.from('.intro__text--mark', {
        scrollTrigger: {
            trigger: 'intro', 
            start: 'top 50%', 
            toggleActions: 'restart reset restart reset'
        }, 
        delay: 0.6,  
        stagger: 0.5,
        backgroundImage: 'linear-gradient(to left, rgba(235, 242, 240, 0), rgba(235, 242, 240, 0), rgba(235, 242, 240, 0), rgba(235, 242, 240, 0), rgba(235, 242, 240, 0))' , 
        ease: 'power2.out'
    }); 
}

