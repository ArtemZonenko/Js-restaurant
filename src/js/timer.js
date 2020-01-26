class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerSelector = document.querySelector(selector);
    this.refs = {
      hours: this.timerSelector.querySelector('span[data-value="hours"]'),
      mins: this.timerSelector.querySelector('span[data-value="mins"]'),
      secs: this.timerSelector.querySelector('span[data-value="secs"]'),
    };

    this.timerId = setInterval(() => {
      const currentDate = Date.now();
      const time = this.targetDate - currentDate;

      this.updateClock(time);
    }, 1000);
  }
  updateClock(value) {
    const hours = this.pad(
      Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((value % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((value % (1000 * 60)) / 1000));

    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }
  pad(timeString) {
    return String(timeString).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(Date.now() + 900000),
});

//                     1649754000000

//900000 - 15 мин

// const date = Date.now();
// console.log(date);

// new Date(year, month, date, hours, minutes, seconds, ms)
// const date = new Date(2020, 27, 12, 12);

// console.log(`2020, 27, 12, 12 соответствует ${date.getTime()}`);
