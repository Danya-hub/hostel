'use strict';

// -------------> import <-------------

import header from "./js/header.js";
import hostelInfo from "./js/hostelInfo.js";

header();
hostelInfo();

// -------------> scroll <-------------

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const buttonUp = document.querySelector('.buttonUp');

    if (scroll !== 0) {
        buttonUp.style.visibility = 'visible';
        buttonUp.style.opacity = 0.4;
    } else {
        buttonUp.style.visibility = 'hidden';
        buttonUp.style.opacity = 0;
    }
})

// -------------> The End <-------------