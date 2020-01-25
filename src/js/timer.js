const refs = {
  startBtn: document.querySelector('button[data-action="start-timer"]'),
  stopBtn: document.querySelector('button[data-action="stop-timer"]'),
};

const timer = {
  start() {
    this.startTime = Date.now();

    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - this.startTime;

      const date = new Date(deltaTime);

      const hour = date.getHours();
      const mins = date.getMinutes();
      const secs = date.getSeconds();
    }, 1000);
  },
  stop() {},
};
document.addEventListener('load', function(e) {
  // body
});
refs.startBtn.addEventListener('click', timer.start.bind(timer));
