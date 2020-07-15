'use strict';

const header = () => {
    const netWorks = document.querySelector('.header-netWorks'),
        listItem = document.querySelector('.header-list'),
        menuLink = document.querySelector('.header-menuLink'),
        menuBlock = document.querySelector('.menuBlock'),
        navigation = document.querySelector('.navigation'),
        header = document.querySelector('.header'),
        blackout = document.querySelector('.blackout');
    const laptopChanges = () => {
        if (laptop.matches) {
            menuLink.style.display = 'flex';
            menuBlock.append(netWorks)
        } else {
            header.appendChild(netWorks);
            menuLink.style.display = 'none';
        }
    }

    const tabletChanges = () => {
        if (tablet.matches) {
            menuBlock.append(listItem)
        } else {
            navigation.append(listItem)
        }
    }

    const tablet = window.matchMedia('(max-width: 855px)');
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
        } else {
            menuBlock.classList.remove('menuBlockActive');
            blackout.style.display = 'none';
        }
    })
}

export default header;