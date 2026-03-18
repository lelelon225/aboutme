

function darkmode() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
   
     
     if (currentTheme === 'dark-mode') {
        root.removeAttribute('data-theme');
        document.getElementById('moonIcon').style.visibility = 'visible';
        document.getElementById('sunIcon').style.visibility = 'hidden';

    }
     else  {
        root.setAttribute('data-theme', 'dark-mode');
        document.getElementById('sunIcon').style.visibility = 'visible';
        document.getElementById('sunIcon').style.filter = 'invert(1)';
        document.getElementById('L-Logo').style.fill = '#ffffff';
        document.getElementById('moonIcon').style.visibility = 'hidden';
    }
}

