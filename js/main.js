const header = document.querySelector("header");
const firstSection = document.querySelector(".firstSection");
const mainLogo = document.querySelector(".main-logo");
const navLogo = document.querySelector(".nav-logo");

var window_width = window.matchMedia("(min-width: 1440px)")
if (window_width.matches) {
    const options =
    {
        root: document.main,
        rootMargin: "0px 0px 0px 0px",
        threshold: [...Array(100).keys()].map(x => x / 100)
    };
    function callback(entries, observer) {
        const ratio = entries[0].intersectionRatio;
        const boundingRect = entries[0].boundingClientRect;
        const intersectionRect = entries[0].intersectionRect;
        // if (entries[0].isIntersecting) {
        // if (entries[0].intersectionRatio < 0.5) {
        if (ratio > 0.75) {
            if (boundingRect.top < intersectionRect.top) {
                firstSection.style.opacity = 0.5;
                navLogo.classList.add("nav-logo");
                navLogo.classList.remove("nav-logo-hidden");
                header.classList.add("nav-scroll")
            }
            else {
                firstSection.style.opacity = 1;
                navLogo.classList.add("nav-logo-hidden");
                navLogo.classList.remove("nav-logo");
                header.classList.remove("nav-scroll")
            }
        }
    }
    let observer = new IntersectionObserver(callback, options)
    observer.observe(firstSection);
}


$('.contact-check').on('change', function () {
    $('.contact-check').not(this).prop('checked', false);
});

$('nav a').on('click', function () {
    $('.nav-toggle').prop("checked", false);
});


// Image Slider
var slideIndex = 1;
// showSlides(slideIndex);
// autoIncrement();
window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () { plusSlides(1) }, 5000);
})

// Next/previous controls
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function () { plusSlides(n + 2) }, 5000);
    } else {
        myTimer = setInterval(function () { plusSlides(n + 1) }, 5000);
    }
}

// Thumbnail image controls
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(n + 1) }, 5000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    console.log(slides.length);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
