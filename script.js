const bookingModal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
const bookingSuccess = document.getElementById('bookingSuccess');
const bookingTriggers = document.querySelectorAll('#bookButton, .nav-cta');
const closeBooking = document.querySelectorAll('[data-close-booking]');

function openBooking(event) {
    event.preventDefault();
    bookingModal.classList.add('is-open');
    bookingModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('booking-open');
    bookingForm.querySelector('select').focus();
}

function hideBooking() {
    bookingModal.classList.remove('is-open');
    bookingModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('booking-open');
}

bookingTriggers.forEach((trigger) => trigger.addEventListener('click', openBooking));
closeBooking.forEach((trigger) => trigger.addEventListener('click', hideBooking));

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && bookingModal.classList.contains('is-open')) hideBooking();
});

bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    bookingForm.classList.add('is-submitted');
    bookingSuccess.classList.add('show');
});
