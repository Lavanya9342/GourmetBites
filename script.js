// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
});

// Initialize Swiper
var swiper = new Swiper(".menu-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        768: { slidesPerView: 3, spaceBetween: 30 }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Reservation Form Logic with console logging
const reservationForm = document.getElementById('reservation-form');
const successMessage = document.getElementById('reservation-success');

reservationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect values from the form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Create an object for the reservation
    const reservationData = {
        name: name,
        email: email,
        date: date,
        time: time,
        guests: Number(guests),
        submittedAt: new Date().toISOString()
    };

    // Print to console in multiple useful formats:
    console.log('--- New Reservation Submitted ---');
    console.table(reservationData); // neat table view
   

    // (Optional) If you want to send to server later, use fetch() here.

    // Show success message and reset form
    reservationForm.style.display = 'none';
    successMessage.style.display = 'block';
    reservationForm.reset();
});
