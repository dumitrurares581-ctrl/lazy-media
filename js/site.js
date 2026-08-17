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

  // Contact form: client-side only (no backend wired up yet).
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      if (status) {
        status.textContent = 'Thanks — message received. We\'ll get back to you soon.';
        status.classList.remove('hidden');
      }
      form.reset();
    });
  }
});
