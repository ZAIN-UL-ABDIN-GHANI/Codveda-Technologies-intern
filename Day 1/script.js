// Mobile menu toggle function
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
});

// Smooth scroll animation for elements
function animateOnScroll() {
  const cards = document.querySelectorAll('.feature-card');
  const aboutContent = document.querySelector('.about-content');
  const contactSection = document.querySelector('.contact-section');
  
  // Animate feature cards
  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardVisible = 150;
    
    if (cardTop < window.innerHeight - cardVisible) {
      card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.2}s both`;
    }
  });
  
  // Animate about section
  if (aboutContent) {
    const aboutTop = aboutContent.getBoundingClientRect().top;
    const aboutVisible = 150;
    
    if (aboutTop < window.innerHeight - aboutVisible) {
      aboutContent.style.animation = 'fadeInUp 0.8s ease-out both';
    }
  }
  
  // Animate contact section
  if (contactSection) {
    const contactTop = contactSection.getBoundingClientRect().top;
    const contactVisible = 150;
    
    if (contactTop < window.innerHeight - contactVisible) {
      contactSection.style.animation = 'fadeInUp 0.8s ease-out both';
    }
  }
}

// Run animations on scroll
window.addEventListener('scroll', animateOnScroll);

// Run animations on page load
window.addEventListener('load', animateOnScroll);

// Enhanced button hover effects
document.addEventListener('DOMContentLoaded', function() {
  const ctaButtons = document.querySelectorAll('.cta-button');
  
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(102, 126, 234, 0.95)';
    nav.style.backdropFilter = 'blur(10px)';
  } else {
    nav.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    nav.style.backdropFilter = 'none';
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  const navContainer = document.querySelector('.nav-container');
  
  if (!navContainer.contains(event.target) && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Prevent menu close when clicking inside nav menu
document.getElementById('nav-menu').addEventListener('click', function(event) {
  event.stopPropagation();
});

// Smooth scroll for anchor links with offset
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Add loading animation
window.addEventListener('load', function() {
  const body = document.body;
  body.style.opacity = '0';
  body.style.transition = 'opacity 0.5s ease-in-out';
  
  setTimeout(() => {
    body.style.opacity = '1';
  }, 100);
});

// Simple contact form validation (if you add a contact form later)
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add some interactive feedback for contact items
document.addEventListener('DOMContentLoaded', function() {
  const contactItems = document.querySelectorAll('.contact-item');
  
  contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
  });
});

// Feature cards stagger animation
function staggerFeatureCards() {
  const cards = document.querySelectorAll('.feature-card');
  
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.6s ease-out';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 200);
  });
}

// Initialize stagger animation when features section is visible
const featuresSection = document.querySelector('.features');
let featuresAnimated = false;

function checkFeaturesSection() {
  if (!featuresAnimated) {
    const featuresTop = featuresSection.getBoundingClientRect().top;
    
    if (featuresTop < window.innerHeight - 100) {
      staggerFeatureCards();
      featuresAnimated = true;
    }
  }
}

window.addEventListener('scroll', checkFeaturesSection);
window.addEventListener('load', checkFeaturesSection);