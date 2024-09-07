document.addEventListener("DOMContentLoaded", function () {
    // Navbar scroll event
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled'); // Add 'scrolled' class on scroll
        } else {
            navbar.classList.remove('scrolled'); // Remove 'scrolled' class when at top
        }
    });

    // Why-us section
    const whyusHeaders = document.querySelectorAll(".whyus-header");

    whyusHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const whyusItem = this.parentElement;
            const isActive = whyusItem.classList.contains("active");

            // Close all whyus items
            document.querySelectorAll(".whyus-item").forEach(item => {
                item.classList.remove("active");
                item.querySelector(".whyus-content").style.display = "none";
                item.querySelector(".whyus-icon").textContent = ">";
            });

            // If the clicked item was not active, open it
            if (!isActive) {
                whyusItem.classList.add("active");
                whyusItem.querySelector(".whyus-content").style.display = "block";
                whyusItem.querySelector(".whyus-icon").textContent = "v";
            }
        });
    });


    // filter
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                if (filter === "all" || item.getAttribute("data-item") === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });



});


    // slide
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);



/* navLinks  */
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}