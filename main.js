



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