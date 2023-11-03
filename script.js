let slideIndex = 1;
let shopMenu = document.querySelector('.sideMenu .shopMenu');
let num = 0;

const responsiveShopBtn = () => {
    let resShopBtn = document.querySelector('.sideMenu .sideBarShopBtn');

    resShopBtn.addEventListener('click', function(){
        if(num == 0){
            shopMenu.style.display = 'block';
            num = num + 1;
        }
        else{
            shopMenu.style.display = 'none';
            num = num - 1;
        }
    })
}

const responsiveMenuSlider = () => {
    let menu = document.querySelector('.navbar .menuLogo .menu');
    let slider = document.querySelector('.main .sideMenu');
    let bg = document.querySelector('.main .content');
    let menuText = document.querySelector('.sideMenu p');
    let count = 0

    menu.addEventListener('click', function(){
        if(count == 0){
            slider.style.width = '55vw';
            slider.style.opacity = 1;
            bg.style.filter = 'blur(7px) brightness(50%)';
            slider.style.display = 'block';
            count = count + 1;
        }
        else{
            if (num == 1) {
                shopMenu.style.display = 'none';
                num = num - 1;
            }    
            slider.style.width = 0;
            slider.style.opacity = 0;
            bg.style.filter = 'blur(0) brightness(100%)';
            slider.style.display = 'none';
            count = count - 1;
        }
    })
}

const dropdownMenu = () => {
    let dropdown = document.querySelector('.main .dropdown');
    let shopBtn = document.querySelector('.main .navbar .center .shopBtn');
    let content = document.querySelector('.content');

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

const searchFieldAnimation = () => {
    let btn = document.querySelector('.navbar .center .searchBtn');
    let searchInput = document.querySelector('.navbar .searchField');
    let cont = document.querySelector('.main .content');
    let click = 0;

    btn.addEventListener('click', function(){
        if(click==0){
            searchInput.style.opacity = 1;
            searchInput.style.transform = 'translateY(40vh)';
            cont.style.filter = 'brightness(50%)';
            cont.style.filter = 'blur(10px)';
            click = click + 1;
        }
        else{
            searchInput.style.opacity = 0;
            searchInput.style.transform = 'translateY(-40vh)';
            cont.style.filter = 'brightness(100%)';
            cont.style.filter = 'blur(0)';
            click = click - 1;
        }
        
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

// dropdownMenu();
showSlides(slideIndex);
searchFieldAnimation();
responsiveMenuSlider();
responsiveShopBtn();