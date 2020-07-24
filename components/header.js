'use strict';

const header = () => {
    const netWorks = document.querySelector('.header-netWorks'),
        listItem = document.querySelector('.header-list'),
        burgerMenuLink = document.querySelector('.header-menuLinks'),
        menuBlock = document.querySelector('.menuBlock'),
        navigation = document.querySelector('.navigation'),
        header = document.querySelector('.header'),
        blackout = document.querySelector('.blackout'),
        menuBlockWrapper = document.querySelector('.menuBlock-wrapper'),
        listItemLinks = document.querySelectorAll('.header-listItem-links'),
        body = document.querySelector('body');

    const laptopChanges = () => {
        if (laptop.matches) {
            burgerMenuLink.style.display = 'none';
            header.append(netWorks);
        } else {
            burgerMenuLink.style.display = 'flex';
            menuBlockWrapper.append(netWorks);
        }
    }

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