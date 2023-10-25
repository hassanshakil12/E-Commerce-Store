let dropdown = document.querySelector('.main .dropdown');
let shopBtn = document.querySelector('.main .navbar .center .shopBtn');
let content = document.querySelector('.content');
let slideIndex = 1;

const dropdownMenu = () => {
    shopBtn.addEventListener('mouseover', function () {
        dropdown.style.opacity = 1;
        content.style.filter = 'blur(5px)';
        content.style.opacity = 0.3;
    })

    dropdown.addEventListener('mouseleave', function () {
        dropdown.style.opacity = 0;
        content.style.filter = 'blur(0)';
        content.style.opacity = 1;
    })
}

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}
const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
         slideIndex = 1 
    }
    if (n < 1) { 
        slideIndex = slides.length 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

dropdownMenu();
showSlides(slideIndex);