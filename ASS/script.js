const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
let slideIndex = 0;

function showSlide(n) {
  const slides = slider.querySelectorAll('img');
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

showSlide(slideIndex);

prevBtn.addEventListener('click', () => {
  slideIndex--;
  showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  showSlide(slideIndex);
});

//// Countdown timer for an important event
const countdownClock = document.getElementById("countdown-clock");
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

// Set the date of the important event (in this case, 31st December 2023)
const eventDate = new Date("December 31, 2023 23:59:59").getTime();

// Update the countdown timer every second
setInterval(function() {
const currentDate = new Date().getTime();
const timeLeft = eventDate - currentDate;

// Calculate the days, hours, minutes and seconds left
const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

// Update the countdown timer HTML
daysSpan.innerHTML = days;
hoursSpan.innerHTML = hours;
minutesSpan.innerHTML = minutes;
secondsSpan.innerHTML = seconds;
}, 1000); // 1000ms = 1s, so update every second

//
