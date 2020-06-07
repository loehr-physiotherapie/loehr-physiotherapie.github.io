const header = document.querySelector("header");
const firstSection = document.querySelector(".firstSection");
const mainLogo = document.querySelector(".main-logo");
const navLogo = document.querySelector(".nav-logo");

const config =
{
    rootMargin: "-500px 0px 0px 0px",
    threshold: "0.5"
};

observer = new IntersectionObserver((entries) => {
    console.log(entries)
    // if(! (entries[0].isIntersecting ))
    if (entries[0].intersectionRatio < 0.5) {
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
}, config)

observer.observe(firstSection);

$('.contact-check').on('change', function () {
    $('.contact-check').not(this).prop('checked', false);
});

$('nav a').on('click', function () {
    $('.nav-toggle').prop("checked", false);
});