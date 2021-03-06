//------------------------------------------------->
//-- UI SELECTORS -->
//------------------------------------------------->

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

// Menu Button Event Listener
menuBtn.addEventListener('click', toggleMenu);

//------------------------------------------------->
//-- MENU TOGGLE FUNCTION -->
//------------------------------------------------->

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBrand.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    showMenu = true; // Set Menu State True
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBrand.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false; // Set Menu State False
  }
}
