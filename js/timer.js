export default function Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
  sound,
  color,
}) {
  let timerTimeout;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeout);
  }

  function hold() {
    clearTimeout(timerTimeout);
  }

  function plusFive() {
    minutesDisplay.textContent = String((minutes += 5)).padStart(2, "0");
    if (minutes > 90) {
      minutesDisplay.textContent = String((minutes = 90)).padStart(2, "0");
      return;
    }
  }

  function minusFive() {
    minutesDisplay.textContent = String((minutes -= 5)).padStart(2, "0");
    if (minutes < 5) {
      minutesDisplay.textContent = String((minutes = 5)).padStart(2, "0");
      return;
    }
  }

  function countdown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
        reset();
        controls.pause();
        sound.timeEnd();
        sound.stopSound();
        color.resetButtons();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  }

  return {
    reset,
    updateDisplay,
    countdown,
    hold,
    plusFive,
    minusFive,
  };
}
