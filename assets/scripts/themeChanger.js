const themeButton = document.getElementById('light-button'); // Select the theme button
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentIcon = () => document.body.classList.contains(darkTheme) ? 'ri-sun-line' : 'ri-moon-line';

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = () => {
    const currentTheme = selectedTheme || (prefersDarkMode ? 'dark' : 'light');
    const currentIcon = selectedIcon || (currentTheme === 'dark' ? 'ri-sun-line' : 'ri-moon-line');

    document.body.classList.toggle(darkTheme, currentTheme === 'dark');
    themeButton.classList.toggle(iconTheme, currentIcon === 'ri-sun-line');
};

const toggleTheme = () => {
    document.body.classList.toggle(darkTheme);
    const isDarkMode = document.body.classList.contains(darkTheme);
    const newIcon = isDarkMode ? 'ri-sun-line' : 'ri-moon-line';

    localStorage.setItem('selected-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('selected-icon', newIcon);

    themeButton.classList.remove('ri-sun-line', 'ri-moon-line');
    themeButton.classList.add(newIcon);
};

// Apply the theme when the page loads
applyTheme();

themeButton.addEventListener('click', toggleTheme);
