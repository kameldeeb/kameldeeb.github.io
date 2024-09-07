// Header Button
document.addEventListener('DOMContentLoaded', () => {
    const downloadCvBtn = document.querySelector('.download-cv');
    const contactBtn = document.querySelector('.highlight');

    downloadCvBtn.addEventListener('click', () => {
        alert('CV download feature coming soon!');
    });

    contactBtn.addEventListener('click', () => {
        alert('Redirecting to contact page...');
    });
});

// Slider
document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".slider-control.prev");
    const nextButton = document.querySelector(".slider-control.next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
});

// nav active
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-link');
    let currentSection = "";

    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// contact-form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});

// animation
// const app = document.getElementById('typewriter-text');

// const typewriter = new Typewriter(app, {
//     loop: false,
//     delay: 75,
// });

// typewriter
//     .pauseFor(500)
//     .typeString('<p class="intro">Hello!</p>')
//     .pauseFor(300)
//     .typeString('<p>My name is Kamel and I specialize in web development that utilizes ')
//     .typeString('<span class="highlight">HTML</span>, ')
//     .typeString('<span class="highlight">CSS</span>, ')
//     .typeString('<span class="highlight">JS</span>, and ')
//     .typeString('<span class="highlight">REACT</span> etc.</p>')
//     .pauseFor(300)
//     .typeString('<br><p>I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.</p>')
//     .start();



    document.addEventListener('DOMContentLoaded', () => {
        // Typewriter effect for "About Me" section
        const app = document.getElementById('typewriter-text');
        const typewriter = new Typewriter(app, {
            loop: false,
            delay: 75,
        });
    
        typewriter
            .pauseFor(500)
            .typeString('<p class="intro">Hello!</p>')
            .pauseFor(300)
            .typeString('<p>My name is Kamel and I specialize in web development that utilizes ')
            .typeString('<span class="highlight">HTML</span>, ')
            .typeString('<span class="highlight">CSS</span>, ')
            .typeString('<span class="highlight">JS</span>, and ')
            .typeString('<span class="highlight">REACT</span> etc.</p>')
            .pauseFor(300)
            .typeString('<br><p>I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.</p>')
            .start();
    
        // Typewriter effect for "Hero" section
        const heroApp = document.getElementById('hero-typewriter');
        const heroTypewriter = new Typewriter(heroApp, {
            loop: false,
            delay: 75,
        });
    
        heroTypewriter
        .pauseFor(500)
        .typeString('<h1>Developer;</h1>')
        .pauseFor(300)
        .typeString('<h6 class="tag"><span><h1></span></h6>')
        .typeString('<h2>Hey,<br>I\'m <span>Kamel,</span><br>Full-Stack Developer</h2>')
        .pauseFor(300)
        .typeString('<h6 class="tag"><h1></h6><br></br>')
        .typeString('<h6 class="tag"><span><p></span></h6>')
        .typeString('<p>I help businesses grow by crafting amazing web experiences. If you\'re looking for a developer that likes to get stuff done.</p>')
        .typeString('<h6 class="tag"><p></h6><br></br>')
        .start();
});