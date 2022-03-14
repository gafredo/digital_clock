const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const relogio = setInterval(() => {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  hours.textContent = hr.toString().padStart(2, '0');
  minutes.textContent = min.toString().padStart(2, '0');
  seconds.textContent = sec.toString().padStart(2, '0');
}, 1000);
