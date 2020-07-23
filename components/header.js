'use strict';

const header = () => {
    const netWorks = document.querySelector('.header-netWorks'),
        listItem = document.querySelector('.header-list'),
        menuLink = document.querySelector('.header-menuLinks'),
        menuBlock = document.querySelector('.menuBlock'),
        navigation = document.querySelector('.navigation'),
        header = document.querySelector('.header'),
        blackout = document.querySelector('.blackout'),
        menuBlockWrapper = document.querySelector('.menuBlock-wrapper'),
        listItemLinks = document.querySelectorAll('.header-listItem-links'),
        body = document.querySelector('body');

    const laptopChanges = () => {
        if (laptop.matches) {
            menuLink.style.display = 'flex';
            menuBlockWrapper.append(netWorks)
        } else {
            header.append(netWorks);
            menuLink.style.display = 'none';
        }
    }

    const tabletChanges = () => {
        if (tablet.matches) {
            menuBlockWrapper.append(listItem)
        } else {
            navigation.append(listItem)
        }
    }

    const tablet = window.matchMedia('(max-width: 760px)');
    tabletChanges(tablet);
    tablet.addListener(tabletChanges);

    const laptop = window.matchMedia("(max-width: 1024px)");
    laptopChanges(laptop);
    laptop.addListener(laptopChanges);

    menuLink.addEventListener('click', (e) => {
        e.preventDefault();
        menuLink.classList.toggle('activeMenuLink');
        if (menuLink.classList.contains('activeMenuLink')) {
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
            menuLink.classList.remove('activeMenuLink');
            menuBlock.classList.remove('menuBlockActive');
            blackout.style.display = 'none';
            body.style.overflow = 'unset';
        })
    }
}

export default header;