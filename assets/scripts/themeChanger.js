const themeButton = document.getElementById('light-button'); // Select the theme button
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const getCurrentTheme = () => {
    if (prefersDarkMode) {
        return 'dark';
    } else {
        return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    }
};

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
} else {
    document.body.classList[prefersDarkMode ? 'add' : 'remove'](darkTheme);
}

themeButton.addEventListener('click', toggleTheme);