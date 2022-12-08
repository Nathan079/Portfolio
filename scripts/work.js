

// NAVIGATION BAR MENU TOGGLE


const menuToggle = document.getElementsByClassName("menu-toggle")[0]
const navbarLinks = document.getElementsByClassName("links")[0]
const navBarContainer = document.getElementsByClassName("navbar-container")[0]

function menuOnClick() {
    navbarLinks.classList.toggle("active")
    menuToggle.classList.toggle("icon")
    navBarContainer.classList.toggle("navbar-bg")
}
