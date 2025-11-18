let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let display = document.getElementById("display");

let timer = null;
let [hours, minutes, seconds] = [0, 0, 0];

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

startButton.addEventListener("click", () => {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  startButton.disabled = false;
  stopButton.disabled = true;
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  startButton.disabled = false;
  stopButton.disabled = true;
});

