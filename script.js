document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    //const preloader = document.querySelector('.preloader');
    
    //window.addEventListener('load', function() {
    //    preloader.classList.add('fade-out');
    //    setTimeout(() => {
    //        preloader.style.display = 'none';
    //    }, 500);
    //});
    
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Header
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Game Card Animation on Scroll
    const gameCards = document.querySelectorAll('.game-card');
    
    function animateOnScroll() {
        gameCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state
    gameCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`;
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Feature Card Animation on Scroll
    const featureCards = document.querySelectorAll('.feature-card');
    
    function animateFeaturesOnScroll() {
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`;
    });
    
    window.addEventListener('scroll', animateFeaturesOnScroll);
    animateFeaturesOnScroll(); // Run once on page load
    
    // Form Submission Handling
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would handle form submission here
            // For this demo, we'll just show an alert
            if (form.classList.contains('newsletter-form')) {
                alert('Thank you for subscribing to our newsletter!');
            } else if (form.classList.contains('contact-form')) {
                alert('Thank you for your message! We will get back to you soon.');
            }
            
            form.reset();
        });
    });
    
    // Game Play Button Animation
    const playButtons = document.querySelectorAll('.play-btn');
    
    playButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Floating Shapes Animation
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach(shape => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        
        shape.style.setProperty('--random-x', `${randomX}px`);
        shape.style.setProperty('--random-y', `${randomY}px`);
    });
    
    // Add animation to hero title
    const heroTitle = document.querySelector('.hero-title');
    const letters = heroTitle.textContent.split('');
    heroTitle.textContent = '';
    
    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        heroTitle.appendChild(span);
    });
});