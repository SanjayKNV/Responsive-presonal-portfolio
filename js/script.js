const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Get current theme/icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon';

// Load saved theme
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconTheme);
}

// Toggle on click
if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  });
} else {
  console.error("Theme button not found! Make sure the button exists in the DOM with id 'theme-button'.");
}

// MENU TOGGLE
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// CLOSE MENU ON LINK CLICK
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// TYPEWRITER EFFECT
new Typewriter('#typewriter', {
  strings: ['Photonics Researcher', 'Freelancing in designing websites, 3D Modelling'],
  autoStart: true,
  loop: true,
  cursor: "|"
});

// SWIPER
var swiper = new Swiper(".blog-slider", {
  cssMode: true,
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: { invert: false },
  pagination: {
    el: ".blog-slider-pagination",
    clickable: true,
  },
  keyboard: true,
});

// SCROLL UP BUTTON
function scrollUp() {
  const scrollup = document.getElementById('scroll-up');
  if (this.scrollY >= 560) {
    scrollup.classList.add('show-scroll');
  } else {
    scrollup.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

// ACTIVE LINK HIGHLIGHT ON SCROLL
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    const navItem = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
    if (navItem) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem.classList.add('active-link');
      } else {
        navItem.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);
