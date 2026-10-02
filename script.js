const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
const year = document.getElementById('year');
const quoteForm = document.getElementById('quoteForm');
const formStatus = document.getElementById('formStatus');

year.textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Prototipo listo: el siguiente paso será conectar este formulario a correo o WhatsApp.';
});
