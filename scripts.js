// Initialize AOS
AOS.init();

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Close menu when clicking a link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.textContent = '☰';
    });
});

// Smooth Scroll Offset for Sticky Nav
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Member Modal
const memberCards = document.querySelectorAll('.member-card');
const modal = document.getElementById('member-modal');
const modalTitle = document.getElementById('modal-title');
const modalBio = document.getElementById('modal-bio');
const closeModal = document.querySelector('.close');

const members = {
    zaire: {
        name: 'Zaire "King" Caldwell',
        bio: 'Né en 1995 à Chicago, Zaire surmonta un passé tumultueux. Abandonné, puis rejeté par sa famille adoptive, il trouva sa place dans les rues d’Englewood. Après une trahison en 2017 et 8 ans de prison, il reforma la SouthSide Nation à Los Santos.'
    },
    caleb: {
        name: 'Caleb Williams',
        bio: 'Double OG de la SouthSide Nation, Caleb est un stratège discret mais implacable. Loyale à Zaire, il gère les opérations quotidiennes avec une main de fer.'
    },
    jafaris: {
        name: 'Jafaris Graham',
        bio: 'OG et lieutenant de confiance, Jafaris est connu pour son sang-froid lors des missions à haut risque. Il est un pilier de la hiérarchie.'
    }
};

memberCards.forEach(card => {
    card.addEventListener('click', () => {
        const memberId = card.dataset.member;
        modalTitle.textContent = members[memberId].name;
        modalBio.textContent = members[memberId].bio;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Keyboard accessibility for modal
closeModal.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === 'Space') {
        modal.style.display = 'none';
    }
});