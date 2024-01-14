let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
const typed = new Typed('.multiple-text', { strings: ['MERN Stack Developer.', 'SEO Engineer', 'Data Analyst.', 'Content Writer'], typeSpeed: 100, backSpeed: 50, backDelay: 1000, loop: true });

function TabMessageChange() {
    var titleElement = document.getElementById('pageTitle');
    if (document.hidden) {

        titleElement.innerText = 'Portfolio | Nikhil Nailwal';
    } else {

        titleElement.innerText = 'Portfolio | Home';
    }
}
document.addEventListener('visibilitychange', TabMessageChange);

function dynamicTitle(section) {
    document.title = `Portfolio | ${section}`;
}


dynamicTitle("Home");

document.addEventListener('scroll', function () {
    var scrollLine = document.getElementById('scroll-line');
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    var scrollPercentage = (window.scrollY / totalHeight) * 35;
    scrollLine.style.width = scrollPercentage + '%';
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if (section.querySelector('h2').innerText == "Hey! I'm") {
                dynamicTitle("Home");
            }
            else {
                dynamicTitle(section.querySelector('h2').innerText);
            }
        }
    });
});

function toggleDarkMode() {
    var body = document.body;
    var allSpans = document.querySelectorAll('span');
    var inputs = document.querySelectorAll('input');
    var btn = document.querySelector('.btn');
    var header = document.querySelector('.header-class');
    var logo = document.querySelector('.logo');
    var about = document.querySelector('.about');
    var servicesBoxes = document.querySelectorAll('.services-container .services-box');
    var servicesBoxesI = document.querySelectorAll('.services-box i');
    var portfolio = document.querySelector('.portfolio');
    var textarea = document.querySelector('textarea');
    var footer = document.querySelector('.footer');
    if (document.querySelector('input[type="checkbox"]').checked) {
        body.style.backgroundColor = '#1f242d';
        body.style.color = '#fff'
        allSpans.forEach(function (span) {
            span.style.color = '#0ef';
        });
        inputs.forEach(function (input) {
            input.style.color = '#fff';
            input.style.backgroundColor = '#323946';
        });
        header.style.backgroundColor = '#1f242d';
        btn.style.backgroundColor = '#0ef';
        btn.style.color = '#323946';
        logo.style.color = '#fff';
        about.style.backgroundColor = '#323946';
        servicesBoxes.forEach(function (box) {
            box.style.backgroundColor = '#323946';
        });
        servicesBoxesI.forEach(function (box) {
            box.style.color = '#0ef';
        });
        portfolio.style.backgroundColor = '#323946';
        textarea.style.color = '#fff';
        textarea.style.backgroundColor = '#323946';
        footer.style.backgroundColor = '#323946';
    } else {
        body.style.backgroundColor = '#94ABD6';
        body.style.color = '#000000'
        allSpans.forEach(function (span) {
            span.style.color = '#244d9e';
        });
        inputs.forEach(function (input) {
            input.style.color = '#000000';
            input.style.backgroundColor = '#A8C0ED';

        });
        header.style.backgroundColor = '#a3a2a2';
        btn.style.backgroundColor = '#183f87';
        btn.style.color = '#A8C0ED';
        logo.style.color = '#000000';
        about.style.backgroundColor = '#A8C0ED';
        servicesBoxes.forEach(function (box) {
            box.style.backgroundColor = '#A8C0ED';
        });
        servicesBoxesI.forEach(function (box) {
            box.style.color = '#00CDDB';
        });
        portfolio.style.backgroundColor = '#A8C0ED';
        textarea.style.color = '#000000';
        textarea.style.backgroundColor = '#A8C0ED';
        footer.style.backgroundColor = '#9c9a9a';
    }
}
//not applied on navbar class and menu icon 
