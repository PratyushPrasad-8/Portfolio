// script.js

window.addEventListener('load', function () {
    // Hide the splash screen after 3 seconds
    setTimeout(function () {
        const splashScreen = document.getElementById('splash-screen');
        splashScreen.style.display = 'none';
        
        // Show the loading screen
        const loading = document.getElementById('loading');
        loading.style.display = 'flex';
        
        // Hide the loading screen and show the main content after 1.5 seconds
        setTimeout(function () {
            loading.style.display = 'none';
            const mainContent = document.getElementById('main-content');
            mainContent.style.display = 'block';
        }, 2000);
    }, 4000);
});
