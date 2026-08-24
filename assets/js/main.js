(() => {
  'use strict';

  const navbar = document.querySelector('.navbar.fixed-top');
  const yearNodes = document.querySelectorAll('#year');
  const navCollapse = document.getElementById('mainNav');

  yearNodes.forEach(node => { node.textContent = new Date().getFullYear(); });

  const updateNav = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 24);
  };
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  const form = document.getElementById('travelForm');
  const success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
      form.classList.add('was-validated');
      if (success) {
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }
})();
