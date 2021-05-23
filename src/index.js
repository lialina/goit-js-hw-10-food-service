import menuItemsTpl from './menu-item.hbs';
import menuItems from './menu.json';
import './sass/main.scss';


const menuListElement = document.querySelector(".js-menu");
const menuMarkup = createMenuItemsMarkup(menuItems);

menuListElement.insertAdjacentHTML('beforeend', menuMarkup);


function createMenuItemsMarkup(menuItems) {
  return menuItemsTpl(menuItems);
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyElement = document.querySelector("body");
bodyElement.classList.add("light-theme");

const themeSwitchToggleCheckbox = document.querySelector("#theme-switch-toggle");

themeSwitchToggleCheckbox.addEventListener('click', onCheckboxChange);
themeSwitchToggleCheckbox.getAttribute('checked');

let currentTheme;

function onCheckboxChange(evt) {
    // evt.preventDefault();

    const target = evt.target;
  
    bodyElement.classList.toggle("light-theme");
    bodyElement.classList.toggle("dark-theme");
  
    if (bodyElement.classList.contains("light-theme")) {
      currentTheme = 'LIGHT';
    } else if (bodyElement.classList.contains("dark-theme")) {
      currentTheme = 'DARK';
    }

  localStorage.setItem('currentTheme', currentTheme);
};

const savedTheme = localStorage.getItem('currentTheme');

if (savedTheme === 'DARK') {
    bodyElement.classList.toggle("light-theme");
    bodyElement.classList.toggle("dark-theme");
  
  themeSwitchToggleCheckbox.checked = true;
};