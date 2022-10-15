import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('button');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

buttonEl.addEventListener('click', onStartClick);
buttonEl.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      buttonEl.removeAttribute('disabled');
    }
    else {
      if (!buttonEl.hasAttribute('disabled')) {
        buttonEl.setAttribute('disabled', '');
      }
      alert("Please choose a date in the future");
    }
    console.log(selectedDates[0]);
  },
};

flatpickr(inputEl, options);
const dataPickr = new flatpickr(inputEl, options);

function pad(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function onStartClick(e) {

  const timerId = setInterval(toEvent, 1000);
  
  const currentDate = new Date();
  const newDate = dataPickr.selectedDates[0];
  const Timeout = newDate - currentDate;
  setTimeout(() => clearInterval(timerId), Timeout)
}

function toEvent() {
  const currentDate = new Date();
  const newDate = dataPickr.selectedDates[0];
  const time = newDate - currentDate  ;
  console.log(time);
  console.log(convertMs(time));
  days.textContent = convertMs(time).days;
  hours.textContent = convertMs(time).hours;
  minutes.textContent = convertMs(time).minutes;
  seconds.textContent = convertMs(time).seconds;
}

