let timer;
let seconds = 0;

function updateDisplay() {
  let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  let secs = String(seconds % 60).padStart(2, '0');

  document.getElementById("display").innerText =
    `${hrs}:${mins}:${secs}`;
}

function start() {
  timer = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  seconds = 0;
  updateDisplay();
}
