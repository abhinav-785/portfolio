/*=================== Toggle Icon Navgar ========================*/

let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
menuIcon.classList.toggle('fa-xmark');
navbar. classList. toggle('active');
}

/*=================== scroll section active link ========================*/
// let sections = document.querySelectorAll('section'); 
// let navLinks = document.querySelectorAll('header nav a');
// window.onscrol1 = () => {
// sections.forEach(sec => {
//      let top = window.scrollY;
// let offset = sec.offsetTop - 150; 
// let height = sec.offsetHeight; 
// let id = sec.getAttribute('id');
// if (top >= offset && top < offset + height) {
//  navLinks.forEach.apply(links => {
// links.classList.remove('active');
// document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
// });
// });
// });
// }



/*=================== scroll section active link ========================*/
let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight; 
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });


/*============================  sticky navbar   ==================================*/

let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/*============================  scroll reveal   ==================================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,   .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img, .projects-box', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content , .skills-container', { origin: 'right' });

/*============================  typed js  ==================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Student'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");

            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});