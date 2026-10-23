const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  const select = document.querySelector('#service');
  if (select) select.value = link.dataset.service;
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    'Hello HappyHome Financial Services, I would like to make an enquiry.',
    '',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Service: ${data.get('service')}`,
    `Message: ${data.get('message') || 'Not provided'}`,
    '',
    'I agree to be contacted about this enquiry.'
  ].join('\n');
  const url = 'https://wa.me/919979777383?text=' + encodeURIComponent(message);
  document.querySelector('#form-status').textContent = 'WhatsApp will open with your enquiry prepared. Review the details and press Send in WhatsApp.';
  window.open(url, '_blank', 'noopener,noreferrer');
});
