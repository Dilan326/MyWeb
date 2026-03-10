// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
    mobileMenu.classList.remove('hidden');
    // slight delay to allow display flex to apply before opacity changes
    setTimeout(() => {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
    }, 10);
}

function closeMenu() {
    mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300); // match duration-300
}

mobileMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // pixels before revealing
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            // Optional: reset on scroll up
            // reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);
// Trigger reveal on load
reveal();

// Dynamic Navbar Background on Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-darkbg/80');
        navbar.classList.remove('bg-darkbg/50');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-darkbg/80');
        navbar.classList.add('bg-darkbg/50');
    }
});
