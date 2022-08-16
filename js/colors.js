export default function Colors({
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
}) {
  function forestButton() {
    buttonForest.classList.remove("hide");
    buttonForestSelected.classList.add("hide");
  }

  function forestButtonSelected() {
    buttonForest.classList.add("hide");
    buttonForestSelected.classList.remove("hide");
  }

  function forestSlider() {
    sliderForest.classList.remove("hide");
    sliderForestSelected.classList.add("hide");
  }

  function forestSliderSelected() {
    sliderForestSelected.classList.remove("hide");
    sliderForest.classList.add("hide");
  }

  function rainButton() {
    buttonRain.classList.remove("hide");
    buttonRainSelected.classList.add("hide");
  }

  function rainButtonSelected() {
    buttonRain.classList.add("hide");
    buttonRainSelected.classList.remove("hide");
  }

  function rainSlider() {
    sliderRain.classList.remove("hide");
    sliderRainSelected.classList.add("hide");
  }

  function rainSliderSelected() {
    sliderRainSelected.classList.remove("hide");
    sliderRain.classList.add("hide");
  }

  function coffeeButton() {
    buttonCoffee.classList.remove("hide");
    buttonCoffeeSelected.classList.add("hide");
  }

  function coffeeButtonSelected() {
    buttonCoffee.classList.add("hide");
    buttonCoffeeSelected.classList.remove("hide");
  }

  function coffeeSlider() {
    sliderCoffee.classList.remove("hide");
    sliderCoffeeSelected.classList.add("hide");
  }

  function coffeeSliderSelected() {
    sliderCoffeeSelected.classList.remove("hide");
    sliderCoffee.classList.add("hide");
  }

  function fireplaceButton() {
    buttonFireplace.classList.remove("hide");
    buttonFireplaceSelected.classList.add("hide");
  }

  function fireplaceButtonSelected() {
    buttonFireplace.classList.add("hide");
    buttonFireplaceSelected.classList.remove("hide");
  }

  function fireplaceSlider() {
    sliderFireplace.classList.remove("hide");
    sliderFireplaceSelected.classList.add("hide");
  }

  function fireplaceSliderSelected() {
    sliderFireplaceSelected.classList.remove("hide");
    sliderFireplace.classList.add("hide");
  }

  function resetButtons() {
    forestButton();
    forestSlider();
    rainButton();
    rainSlider();
    coffeeButton();
    coffeeSlider();
    fireplaceButton();
    fireplaceSlider();
  }

  return {
    forestButton,
    forestButtonSelected,
    forestSlider,
    forestSliderSelected,
    rainButton,
    rainButtonSelected,
    rainSlider,
    rainSliderSelected,
    coffeeButton,
    coffeeButtonSelected,
    coffeeSlider,
    coffeeSliderSelected,
    fireplaceButton,
    fireplaceButtonSelected,
    fireplaceSlider,
    fireplaceSliderSelected,
    resetButtons,
  };
}
