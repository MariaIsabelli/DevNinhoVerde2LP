document.addEventListener('DOMContentLoaded', function() {
    const menuDropdown = document.getElementById('menu-dropdown');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navLinks = document.getElementById('nav-links');

    hamburgerIcon.addEventListener('click', function() {
        menuDropdown.classList.toggle('hidden');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) { // Adapte esse valor para a largura em que deseja mudar o layout
            menuDropdown.classList.add('hidden');
        }
    });
});
