// navigation menu for smaller screen
const navMenu = document.querySelector('.nav-menu');
const navigation = document.querySelector('.navigation');
const openBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');

const navLeftMenu = navMenu.getBoundingClientRect().left;
openBtn.addEventListener('click', () => {
    if(navLeftMenu < 0) {
        navMenu.classList.add('show');
        navigation.classList.add('show');
        document.body.classList.add('show');
    }
});

closeBtn.addEventListener('click', () => {
    if(navLeftMenu < 0) {
        navMenu.classList.remove('show');
        navigation.classList.remove('show');
        document.body.classList.remove('show');
    }
});

// fix-nav
const navBar = document.querySelector('.navigation');
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight) {
        navBar.classList.add('fix-nav')
    } else {
        navBar.classList.remove('fix-nav')
    }
})
