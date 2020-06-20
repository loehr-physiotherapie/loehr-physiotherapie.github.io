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
        if (ratio < 1) {
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