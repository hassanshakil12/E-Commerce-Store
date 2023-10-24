let dropdown = document.querySelector('.main .dropdown');
let shopBtn = document.querySelector('.main .navbar .center .shopBtn');
let content = document.querySelector('.content');

const dropdownMenu = () => {
    shopBtn.addEventListener('mouseover', function () {
        dropdown.style.opacity = 1;
        content.style.filter = 'blur(5px)';
    })

    dropdown.addEventListener('mouseleave', function () {
        dropdown.style.opacity = 0;
        content.style.filter = 'none'
    })
}

dropdownMenu();

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}