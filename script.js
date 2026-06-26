document.addEventListener('DOMContentLoaded', function () {
    // Facebook SDK
    if (typeof FB !== 'undefined' && FB.XFBML) {
        FB.XFBML.parse();
    }

    // Dojo discipline filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const dojoCards = document.querySelectorAll('.dojo-card');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            dojoCards.forEach(function (card) {
                const disciplines = card.getAttribute('data-disciplines') || '';
                if (filter === 'tous' || disciplines.includes(filter)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Mobile nav dropdown toggle
    const menuBtn = document.querySelector('.nav-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function () {
            const isOpen = navLinks.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', String(isOpen));
            menuBtn.textContent = isOpen ? 'Fermer ✕' : 'Menu';
        });
        navLinks.querySelectorAll('.nav-link').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.textContent = 'Menu';
            });
        });
    }
});
