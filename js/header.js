'use strict';

const header = () => {

    // -------------> links <-------------
    
    const listItem = document.querySelector('.header-list');
    const burgerMenuLink = document.querySelector('.header-menuLinks');
    const menuBlock = document.querySelector('.menuBlock');
    const navigation = document.querySelector('.navigation');
    const blackout = document.querySelector('.blackout');
    const menuBlockWrapper = document.querySelector('.menuBlock-wrapper');
    const logoTxt = document.querySelector('.header-logoTxt');
    const logoTxtName = document.querySelector('.header-logoTxt-name');
    const body = document.querySelector('body');
    
    // -------------> interval letters <-------------
    
    const logoTxtInverted = () => {
        logoTxt.innerHTML = logoTxtName.textContent.split('').map(e => `<span>${e}</span>`).join('');
    }

    // -------------> media rules <-------------
    
    logoTxtInverted();
    const tabletChanges = () => {
        if (tablet.matches) {
            burgerMenuLink.style.display = 'none';
            navigation.style.display = 'block';
            navigation.append(listItem);
        } else {
            navigation.style.display = 'none';
            burgerMenuLink.style.display = 'flex';
            menuBlockWrapper.append(listItem);
        }
    }

    const tablet = window.matchMedia('(min-width: 760px)');
    tabletChanges(tablet);
    tablet.addListener(tabletChanges);

    // -------------> burger menu for links <-------------
    
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

        if (burgerMenuLink.classList.contains('activeMenuLink')) {
            blackout.addEventListener('click', () => {
                burgerMenuLink.classList.remove('activeMenuLink');
                menuBlock.classList.remove('menuBlockActive');
                blackout.style.display = 'none';
                body.style.overflow = 'unset';
            })
        }
    })
}

export default header;

// -------------> The End <-------------