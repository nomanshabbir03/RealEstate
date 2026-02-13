// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// Search Tabs
const searchTabs = document.querySelectorAll('.search-tab');

searchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        searchTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const tabType = tab.getAttribute('data-tab');
        console.log(`Switched to ${tabType} tab`);
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Property Card Actions
const actionButtons = document.querySelectorAll('.action-btn');

actionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const action = btn.classList.contains('call') ? 'Call' : 
                      btn.classList.contains('whatsapp') ? 'WhatsApp' : 'Share';
        
        if (action === 'Call') {
            window.location.href = 'tel:+923090334327';
        } else if (action === 'WhatsApp') {
            window.open('https://wa.me/923090334327', '_blank');
        } else if (action === 'Share') {
            if (navigator.share) {
                navigator.share({
                    title: 'Property Listing',
                    text: 'Check out this property!',
                    url: window.location.href
                }).catch(err => console.log('Share failed:', err));
            } else {
                alert('Share functionality not supported in this browser');
            }
        }
    });
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterInput = document.querySelector('.newsletter-input');
const newsletterBtn = document.querySelector('.newsletter-btn');

if (newsletterBtn) {
    newsletterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = newsletterInput.value.trim();
        
        if (email && isValidEmail(email)) {
            alert('Thank you for subscribing!');
            newsletterInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Search Form
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const searchSelect = document.querySelector('.search-select');

if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const location = searchInput.value.trim();
        const propertyType = searchSelect.value;
        
        if (location || propertyType) {
            console.log('Searching for:', { location, propertyType });
            alert(`Searching for ${propertyType || 'properties'} in ${location || 'Qatar'}`);
        } else {
            alert('Please enter a location or select a property type');
        }
    });
}

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all property cards and development cards
document.querySelectorAll('.property-card, .development-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Currency Selector (Demo functionality)
const currencySelector = document.querySelector('.currency');

if (currencySelector) {
    currencySelector.addEventListener('click', () => {
        const currencies = ['QAR', 'USD', 'EUR', 'GBP'];
        const currentCurrency = currencySelector.textContent;
        const currentIndex = currencies.indexOf(currentCurrency);
        const nextIndex = (currentIndex + 1) % currencies.length;
        currencySelector.textContent = currencies[nextIndex];
    });
}

// Development Card Hover Effect
const developmentCards = document.querySelectorAll('.development-card');

developmentCards.forEach(card => {
    const img = card.querySelector('img');
    
    card.addEventListener('mouseenter', () => {
        if (img) {
            img.style.transform = 'scale(1.05)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});

// Property Image Gallery Indicator
const propertyImages = document.querySelectorAll('.property-image');

propertyImages.forEach(imageContainer => {
    const galleryCount = imageContainer.querySelector('.property-gallery-count');
    if (galleryCount) {
        imageContainer.addEventListener('click', () => {
            alert('Image gallery would open here with all property photos');
        });
        imageContainer.style.cursor = 'pointer';
    }
});

// View All Buttons
const viewAllBtns = document.querySelectorAll('.view-all-btn');

viewAllBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const btnText = btn.textContent.toLowerCase();
        if (btnText.includes('rent')) {
            alert('Showing all properties for rent...');
        } else if (btnText.includes('sale')) {
            alert('Showing all properties for sale...');
        }
    });
});

// Development Buttons
const developmentBtns = document.querySelectorAll('.development-btn');

developmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.development-card');
        const name = card.querySelector('.development-name').textContent;
        alert(`Opening details for ${name}...`);
    });
});

// Funding Apply Button
const fundingBtn = document.querySelector('.funding-btn');

if (fundingBtn) {
    fundingBtn.addEventListener('click', () => {
        alert('Opening funding application form...');
    });
}

// Hero Button
const heroBtn = document.querySelector('.hero-btn');

if (heroBtn) {
    heroBtn.addEventListener('click', () => {
        alert('Learn more about investing in Qatar real estate...');
    });
}

// Sticky Header Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console welcome message
console.log('%c🏡 Real Estate Qatar Demo Website', 'color: #0f3460; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #666; font-size: 14px;');

}); // End of DOMContentLoaded