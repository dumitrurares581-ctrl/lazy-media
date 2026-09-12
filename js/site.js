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

  // Work rows: reveal each row once as it scrolls into view.
  var rows = document.querySelectorAll('.work-row');
  if (rows.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    rows.forEach(function (row) { observer.observe(row); });
  } else {
    rows.forEach(function (row) { row.classList.add('is-visible'); });
  }
});
