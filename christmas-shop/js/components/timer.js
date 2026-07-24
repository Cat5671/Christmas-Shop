export function initTimer() {
  const timerContainer = document.querySelector('.timer-unit');
  if (!timerContainer) return;
  
  const days = timerContainer.querySelector('.timer-unit__days .timer-unit__numbers');
  const hours = timerContainer.querySelector('.timer-unit__hours .timer-unit__numbers');
  const minutes = timerContainer.querySelector('.timer-unit__minutes .timer-unit__numbers');
  const seconds = timerContainer.querySelector('.timer-unit__seconds .timer-unit__numbers');
  
 
  if (!days || !hours || !minutes || !seconds) {
    console.error('Не найдены элементы таймера');
    return;
  }
  
  const elements = { days, hours, minutes, seconds };
  
    
  updateTimer(elements);
  setInterval(updateTimer, 1000, elements);
}

function updateTimer(elements) {
  const currentDate = new Date();
  const nextYear = currentDate.getFullYear() + 1;
  const nextYearStart = new Date(nextYear, 0, 1);

  const diffMs = nextYearStart - currentDate;   

  const MS_IN_SECOND = 1000;
  const SECONDS_IN_MINUTE = 60;
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;

  const MS_IN_MINUTE = MS_IN_SECOND * SECONDS_IN_MINUTE;
  const MS_IN_HOUR = MS_IN_MINUTE * MINUTES_IN_HOUR;
  const MS_IN_DAY = MS_IN_HOUR * HOURS_IN_DAY;

  const daysNum = Math.floor(diffMs / MS_IN_DAY);
  const hoursNum = Math.floor((diffMs % MS_IN_DAY) / MS_IN_HOUR);
  const minutesNum = Math.floor((diffMs % MS_IN_HOUR) / MS_IN_MINUTE);
  const secondsNum = Math.floor((diffMs % MS_IN_MINUTE) / MS_IN_SECOND);
  
  elements.days.textContent = daysNum;
  elements.hours.textContent = hoursNum;
  elements.minutes.textContent = minutesNum;
  elements.seconds.textContent = secondsNum;
}