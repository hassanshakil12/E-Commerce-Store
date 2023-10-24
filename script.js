let dropdown = document.querySelector('.main .dropdown');
let shopBtn = document.querySelector('.main .navbar .center .shopBtn');
let content = document.querySelector('.content');

const dropdownMenu = () => {
    shopBtn.addEventListener('mouseover', function () {
        dropdown.style.opacity = 1;
        content.style.filter = 'blur(5px)';
        // dropdown.style.transform = 'translateY(0)';
    })

    dropdown.addEventListener('mouseleave', function () {
        dropdown.style.opacity = 0;
        content.style.filter = 'none'
        // dropdown.style.transform = 'translateY(-30%)';
    })

    
}

dropdownMenu();