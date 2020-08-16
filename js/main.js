// navigation
const headerBurger = document.querySelector('.header__burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close')
console.log(navigation)

headerBurger.addEventListener('click', showNavigation);
navigationClose.addEventListener('click', hideNavigation);

function showNavigation() {
    navigation.classList.add('navigation_open', 'navigation_anim');
}

function hideNavigation() {
    navigation.classList.remove('navigation_open')
}

// modal

const modalButtons = document.querySelectorAll('[data-modal]');0
const modalOverlay = document.querySelector('.modal__overlay');
const modalClose = document.querySelectorAll('.modal__close');

modalButtons.forEach(function(button) {
    button.addEventListener('click', showModal);
});

modalClose.forEach(function(close) {
    close.addEventListener('click', hideModal)
}) 

function showModal(event) {
    const data = event.target.getAttribute("data-modal")
    const modal = document.querySelector(data); 
    modalOverlay.classList.add('modal__overlay_open', 'modal__overlay_anim')
    modal.classList.add('modal_open')
}

function hideModal() {
    const modals = document.querySelectorAll('.modal')
    modals.forEach(function(modal) {
        modal.classList.remove('modal_open')
    });
    modalOverlay.classList.remove('modal__overlay_open')
}

//scroll

const headerLink = document.querySelector('.home__nav .header');
const headerLinks = document.querySelectorAll('.home__nav .header');
const navLinks = document.querySelectorAll('.navigation .navigation__link');

headerLink.addEventListener('click', scrollToElement);
headerLinks.forEach(function(link) {
    link.addEventListener('click', scrollToElement);
});
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        hideNavigation();
        scrollToElement(event);
    });
})

function scrollToElement(event) {
    event.preventDefault();

    const href = event.target.getAttribute('href')
    const block = document.querySelector(href);

    window.scrollTo({
        top: block.offsetTop,
        behavior: "smooth"
    });
}

function scrollToElement(event) {
    event.preventDefault();

    const href = event.target.getAttribute('href')
    const block = document.querySelector(href);

    window.scrollTo ({
        top: block.offsetTop,
        behavior: "smooth"
    });
}

 // slider

 const slider = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
     pagination: {
         el: '.gallery__pagination',
         clickable: true,
     },
     breakpoints: {
         320: {
            slidesPerView: 1,
         },
         360: {
            slidesPerView: 2,
         },
         720: {
            slidesPerView: 3,
         },
         1080: {
            slidesPerView: 4,
         }
     }
 })
