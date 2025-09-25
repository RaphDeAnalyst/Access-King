// Access King Solar - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // WhatsApp floating button click tracking
    const whatsappButton = document.querySelector('.whatsapp-float a');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            console.log('WhatsApp button clicked');
            // You can add analytics tracking here
        });
    }

    // Add animation to stats on scroll
    const stats = document.querySelectorAll('.stat-item h3');

    function animateStats() {
        stats.forEach(stat => {
            const rect = stat.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible && !stat.classList.contains('animated')) {
                stat.classList.add('animated');
                const finalNumber = parseInt(stat.textContent);
                let currentNumber = 0;
                const increment = finalNumber / 50; // Animate over ~50 frames

                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= finalNumber) {
                        stat.textContent = finalNumber + '+';
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(currentNumber) + '+';
                    }
                }, 30);
            }
        });
    }

    // Run stats animation on scroll
    window.addEventListener('scroll', animateStats);

    // Run once on load in case stats are already in view
    animateStats();

    // Form validation enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });

    // Add loading animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-success, .btn-primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a subtle loading effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Utility function for smooth reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.card, .testimonial-card');

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
    .card, .testimonial-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }

    .card.revealed, .testimonial-card.revealed {
        opacity: 1;
        transform: translateY(0);
    }

    .navbar.scrolled {
        background-color: rgba(30, 58, 138, 0.95) !important;
        backdrop-filter: blur(10px);
    }

    .btn {
        transition: transform 0.2s ease;
    }

    @media (prefers-reduced-motion: reduce) {
        .card, .testimonial-card {
            opacity: 1;
            transform: none;
            transition: none;
        }
    }
`;

document.head.appendChild(style);