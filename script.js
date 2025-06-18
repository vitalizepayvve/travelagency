document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Booking submitted! We’ll get back to you soon.');
      form.reset();
    });
  }
});
let current = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000);
