'use strict';

import header from "./components/header.js";
import hostelInfo from "./components/hostelInfo.js";

header();
hostelInfo();

window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const buttonUp = document.querySelector('.buttonUp'),
        hostelInfoWrapper = document.querySelector('.hostelInfo-wrapper'),
        priceResidenceMainTitle = document.querySelector('.priceResidence-mainTitle'),
        priceResidenceWrapper = document.querySelector('.priceResidence-wrapper'),
        contactsMainTitle = document.querySelector('.contacts-mainTitle'),
        contactsWrapper = document.querySelector('.contacts-wrapper'); 

    if (scroll !== 0) {
        buttonUp.style.visibility = 'visible';
        buttonUp.style.opacity = 0.4;
    } else {
        buttonUp.style.visibility = 'hidden';
        buttonUp.style.opacity = 0;
    }

    if (scroll > 300) {
        hostelInfoWrapper.classList.add('translateActive')
        hostelInfoWrapper.classList.remove('invisible');
    } 
    
    if (scroll > 900) {
        priceResidenceMainTitle.classList.add('translateActive')
        priceResidenceMainTitle.classList.remove('invisible');
    }

    if (scroll > 1000) {
        priceResidenceWrapper.classList.add('translateActive')
        priceResidenceWrapper.classList.remove('invisible');
    }

    if (scroll > 1450) {
        contactsMainTitle.classList.add('translateActive')
        contactsMainTitle.classList.remove('invisible');
    }

    if (scroll > 1550) {
        contactsWrapper.classList.add('translateActive')
        contactsWrapper.classList.remove('invisible');
    }
})