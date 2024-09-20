document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('login-screen').classList.remove('hidden');
    }, 5000); // 5 seconds for splash screen

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation example
        if (username === 'My Source of Light' && password === 'IloveyouChelsea') {
            // Trigger overlay animation
            const overlay = document.getElementById('login-overlay');
            overlay.classList.remove('hidden');
            overlay.classList.add('visible');

            // Redirect after animation
            setTimeout(function() {
                window.location.href = 'news-feed.html';
            }, 1000); // Short delay before redirect
        } else {
            document.getElementById('error-message').classList.remove('hidden');
        }
    });
});
