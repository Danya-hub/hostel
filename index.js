'use strict';

import header from "./components/header.js";
import hostelInfo from "./components/hostelInfo.js";

header();
hostelInfo();

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const buttonUp = document.querySelector('.buttonUp'),
        hostelInfoWrapper = document.querySelector('.hostelInfo-wrapper')

    console.log(scroll);
    if (scroll !== 0) {
        buttonUp.style.visibility = 'visible';
        buttonUp.style.opacity = 0.4;
    } else {
        buttonUp.style.visibility = 'hidden';
        buttonUp.style.opacity = 0;
    }

    if (scroll > 300) {
        hostelInfoWrapper.style.visibility = 'visible';
        hostelInfoWrapper.style.transform = 'translateY(0px)';
        hostelInfoWrapper.style.opacity = '1';
    } 
})