



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
