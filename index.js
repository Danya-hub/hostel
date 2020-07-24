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

    console.log(scroll);
    if (scroll !== 0) {
        buttonUp.style.visibility = 'visible';
        buttonUp.style.opacity = 0.4;
    } else {
        buttonUp.style.visibility = 'hidden';
        buttonUp.style.opacity = 0;
    }

    if (scroll > 300) {
        hostelInfoWrapper.style.transform = 'translateY(0px)';
        hostelInfoWrapper.classList.remove('invisible');
    } 
    
    if (scroll > 900) {
        priceResidenceMainTitle.style.transform = 'translateY(0px)';
        priceResidenceMainTitle.classList.remove('invisible');
    }

    if (scroll > 1000) {
        priceResidenceWrapper.style.transform = 'translateX(0px)';
        priceResidenceWrapper.classList.remove('invisible');
    }

    if (scroll > 1550) {
        contactsMainTitle.style.transform = 'translateY(0px)';
        contactsMainTitle.classList.remove('invisible');
    }

    if (scroll > 1650) {
        contactsWrapper.style.transform = 'translateX(0px)';
        contactsWrapper.classList.remove('invisible');
    }
})