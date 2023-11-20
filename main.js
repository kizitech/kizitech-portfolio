const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// OPEN THE MOBILE MENU
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// CLOSE THE MOBILE MENU 
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}


// CLOSE MOBILE MENU
const navLinks = document.querySelectorAll('.nav__link')

const linkAction = () => {
  navMenu.classList.remove('show-menu')
}
navLinks.forEach(navLink => navLink.addEventListener('click', linkAction))


// HEADER ONSCROLL SHADOW
const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


// BACK TO TOP BUTTON
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// NAVLINK SCROLL ACTIVE
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)


// THEME TOGGLE
const themeButton = document.getElementById('light-button'); // Select the theme button
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'dark-theme' : 'ri-sun-line';

const toggleTheme = () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
};

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'dark-theme' ? 'add' : 'remove'](iconTheme);
}
themeButton.addEventListener('click', toggleTheme);


// LOADER
window.addEventListener('load', function () {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'none';
});



// SCROLL REVEAL
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  durarion: 1250,
  delay: 400,
  reset: true
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: 'right' })
sr.reveal(`.home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data`, { origin: 'left' })
sr.reveal(`.services__card, .projects__card`, { interval: 100 })
