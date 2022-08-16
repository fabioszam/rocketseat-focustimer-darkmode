import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import Colors from "./colors.js";
import {
  btnLight,
  btnDark,
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonForestSelected,
  buttonRain,
  buttonRainSelected,
  buttonCoffee,
  buttonCoffeeSelected,
  buttonFireplace,
  buttonFireplaceSelected,
  sliderForest,
  sliderForestSelected,
  sliderRain,
  sliderRainSelected,
  sliderCoffee,
  sliderCoffeeSelected,
  sliderFireplace,
  sliderFireplaceSelected,
} from "./elements.js";

const color = Colors({
  sliderForest,
  sliderForestSelected,
  sliderRain,
  sliderRainSelected,
  sliderCoffee,
  sliderCoffeeSelected,
  sliderFireplace,
  sliderFireplaceSelected,
  buttonForest,
  buttonForestSelected,
  buttonRain,
  buttonRainSelected,
  buttonCoffee,
  buttonCoffeeSelected,
  buttonFireplace,
  buttonFireplaceSelected,
});

const controls = Controls({
  buttonPlay,
  buttonPause,
  btnLight,
  btnDark,
});

const sound = Sounds();

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
  sound,
  color,
});

buttonPlay.addEventListener("click", function () {
  sound.pressButton();
  controls.play();
  timer.countdown();
});

buttonStop.addEventListener("click", function () {
  sound.pressButton();
  controls.pause();
  timer.reset();
});

buttonPause.addEventListener("click", function () {
  sound.pressButton();
  controls.pause();
  timer.hold();
});

buttonPlus.addEventListener("click", function () {
  sound.pressButton();
  timer.plusFive();
});

buttonMinus.addEventListener("click", function () {
  sound.pressButton();
  timer.minusFive();
});

buttonForest.addEventListener("click", function () {
  sound.pressButtonForestOn();
  color.forestButtonSelected();
  color.forestSliderSelected();
});

buttonForestSelected.addEventListener("click", function () {
  sound.pressButtonForestOff();
  color.forestButton();
  color.forestSlider();
});

buttonRain.addEventListener("click", function () {
  sound.pressButtonRainOn();
  color.rainButtonSelected();
  color.rainSliderSelected();
});

buttonRainSelected.addEventListener("click", function () {
  sound.pressButtonRainOff();
  color.rainButton();
  color.rainSlider();
});

buttonCoffee.addEventListener("click", function () {
  sound.pressButtonCoffeeOn();
  color.coffeeButtonSelected();
  color.coffeeSliderSelected();
});

buttonCoffeeSelected.addEventListener("click", function () {
  sound.pressButtonCoffeeOff();
  color.coffeeButton();
  color.coffeeSlider();
});

buttonFireplace.addEventListener("click", function () {
  sound.pressButtonFireplaceOn();
  color.fireplaceButtonSelected();
  color.fireplaceSliderSelected();
});

buttonFireplaceSelected.addEventListener("click", function () {
  sound.pressButtonFireplaceOff();
  color.fireplaceButton();
  color.fireplaceSlider();
});

btnLight.addEventListener("click", function () {
  controls.lightMode();
});

btnDark.addEventListener("click", function () {
  controls.darkMode();
});
