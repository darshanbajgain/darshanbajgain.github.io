var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', function () {
    /*mobileNav.style.display = 'block';
    backdrop.style.display = 'block'; */
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

backdrop.addEventListener('click', function () {
    /* mobileNav.style.display = 'none';
     backdrop.style.display = 'none'; */
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
});