// Lazy Media — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var menuBtn = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
