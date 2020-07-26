'use strict';

const header = () => {
    const telWrapper = document.querySelector('.header-telWrapper'),
        listItem = document.querySelector('.header-list'),
        burgerMenuLink = document.querySelector('.header-menuLinks'),
        menuBlock = document.querySelector('.menuBlock'),
        navigation = document.querySelector('.navigation'),
        header = document.querySelector('.header'),
        blackout = document.querySelector('.blackout'),
        menuBlockWrapper = document.querySelector('.menuBlock-wrapper'),
        listItemLinks = document.querySelectorAll('.header-listItem-links'),
        logoTxt = document.querySelector('.header-logoTxt'),
        logoTxtName = document.querySelector('.header-logoTxt-name'),
        buttonUp = document.querySelector('.buttonUp'),
        body = document.querySelector('body');

    const logoTxtInverted = () => {
        logoTxt.innerHTML = logoTxtName.textContent.split('').map(e => `<span>${e}</span>`).join('');
    }

    logoTxtInverted();

    const laptopChanges = () => {
        if (laptop.matches) {
            burgerMenuLink.style.display = 'none';
            header.append(telWrapper);
        } else {
            burgerMenuLink.style.display = 'flex';
            menuBlockWrapper.append(telWrapper);
        }
    }

    const scrollTo = (e) => {
        window.scroll({
            left: 0,
            top: e.offsetTop,
            behavior: 'smooth'
        })
        // console.log(e.offsetTop);
    }

    buttonUp.addEventListener('click', () => {
        scrollTo(header);
    })

    listItem.addEventListener('click', (e) => {
        const hostelInfo = document.querySelector('.hostelInfo'),
            priceResidence = document.querySelector('.priceResidence'),
            contacts = document.querySelector('.contacts');

        // if (e.target === e.currentTarget) {
        //     return
        // }

        switch (e.target.dataset.link) {
            case 'description':
                scrollTo(hostelInfo);
                break;
            case 'price':
                scrollTo(priceResidence);
                break;
            case 'contacts':
                scrollTo(contacts);
                break;
            default:
                break;
        }
    });

    const tabletChanges = () => {
        if (tablet.matches) {
            navigation.append(listItem);
        } else {
            menuBlockWrapper.append(listItem);
        }
    }

    const tablet = window.matchMedia('(min-width: 760px)');
    tabletChanges(tablet);
    tablet.addListener(tabletChanges);

    const laptop = window.matchMedia("(min-width: 1024px)");
    laptopChanges(laptop);
    laptop.addListener(laptopChanges);

    burgerMenuLink.addEventListener('click', (e) => {
        e.preventDefault();
        burgerMenuLink.classList.toggle('activeMenuLink');
        if (burgerMenuLink.classList.contains('activeMenuLink')) {
            menuBlock.classList.add('menuBlockActive');
            blackout.style.display = 'block';
            body.style.overflow = 'hidden';
        } else {
            menuBlock.classList.remove('menuBlockActive');
            blackout.style.display = 'none';
            body.style.overflow = 'unset';
        }
    })

    for (const listItemLink of listItemLinks) {
        listItemLink.addEventListener('click', () => {
            burgerMenuLink.classList.remove('activeMenuLink');
            menuBlock.classList.remove('menuBlockActive');
            blackout.style.display = 'none';
            body.style.overflow = 'unset';
        })
    }
}

export default header;