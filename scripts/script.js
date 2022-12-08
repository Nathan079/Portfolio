

// NAVIGATION BAR MENU TOGGLE


const menuToggle = document.getElementsByClassName("menu-toggle")[0]
const navbarLinks = document.getElementsByClassName("links")[0]
const navBarContainer = document.getElementsByClassName("navbar-container")[0]

function menuOnClick() {
    navbarLinks.classList.toggle("active")
    menuToggle.classList.toggle("icon")
    navBarContainer.classList.toggle("navbar-bg")
}



// CAROUSEL JS


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
