export default function Sounds() {
  const buttonPressForest = new Audio(
    "https://github.com/fabioszam/MyFiles/blob/master/Floresta.wav?raw=true"
  );

  const buttonPressRain = new Audio(
    "https://github.com/fabioszam/MyFiles/blob/master/Chuva.wav?raw=true"
  );

  const buttonPressCoffee = new Audio(
    "https://github.com/fabioszam/MyFiles/blob/master/Cafeteria.wav?raw=true"
  );

  const buttonPressFireplace = new Audio(
    "https://github.com/fabioszam/MyFiles/blob/master/Lareira.wav?raw=true"
  );

  const endedTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );

  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );

  buttonPressForest.loop = true;
  buttonPressRain.loop = true;
  buttonPressCoffee.loop = true;
  buttonPressFireplace.loop = true;

  let forestVolume = document.getElementById("forestVolume");
  forestVolume.addEventListener("change", function (e) {
    buttonPressForest.volume = e.currentTarget.value / 100;
  });

  let rainVolume = document.getElementById("rainVolume");
  rainVolume.addEventListener("change", function (e) {
    buttonPressRain.volume = e.currentTarget.value / 100;
  });

  let coffeeVolume = document.getElementById("coffeeVolume");
  coffeeVolume.addEventListener("change", function (e) {
    buttonPressCoffee.volume = e.currentTarget.value / 100;
  });

  let fireplaceVolume = document.getElementById("fireplaceVolume");
  fireplaceVolume.addEventListener("change", function (e) {
    buttonPressFireplace.volume = e.currentTarget.value / 100;
  });

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    endedTimer.play();
  }

  function pressButtonForestOn() {
    buttonPressForest.play();
  }

  function pressButtonForestOff() {
    buttonPressForest.pause();
  }

  function pressButtonRainOn() {
    buttonPressRain.play();
  }

  function pressButtonRainOff() {
    buttonPressRain.pause();
  }

  function pressButtonCoffeeOn() {
    buttonPressCoffee.play();
  }

  function pressButtonCoffeeOff() {
    buttonPressCoffee.pause();
  }

  function pressButtonFireplaceOn() {
    buttonPressFireplace.play();
  }

  function pressButtonFireplaceOff() {
    buttonPressFireplace.pause();
  }

  function stopSound() {
    pressButtonForestOff();
    pressButtonRainOff();
    pressButtonCoffeeOff();
    pressButtonFireplaceOff();
  }

  return {
    pressButtonForestOn,
    pressButtonForestOff,
    pressButtonRainOn,
    pressButtonRainOff,
    pressButtonCoffeeOn,
    pressButtonCoffeeOff,
    pressButtonFireplaceOn,
    pressButtonFireplaceOff,
    pressButton,
    timeEnd,
    stopSound,
  };
}
