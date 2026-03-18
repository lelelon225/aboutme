

function darkmode() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const moonIcon = document.getElementById('moonIcon');
    const logo = document.getElementById('L-Logo');
    
    if (currentTheme === 'dark-mode') {
        root.removeAttribute('data-theme');
        if (moonIcon) {
            moonIcon.style.visibility = 'visible';
            moonIcon.style.filter = 'none';
            moonIcon.src = 'media/darkmode.svg';
            moonIcon.alt = 'moon';
        }
        if (logo) {
            logo.style.filter = 'none';
        }

    }
    else  {
        root.setAttribute('data-theme', 'dark-mode');
        if (moonIcon) {
            moonIcon.style.visibility = 'visible';
            moonIcon.style.filter = 'invert(1)';
            moonIcon.src = 'media/lightmode.svg';
            moonIcon.alt = 'sun';
        }
        if (logo) {
            logo.style.filter = 'invert(1)';
        }
    }
}

