export default function Controls({
  buttonPlay,
  buttonPause,
  btnLight,
  btnDark,
}) {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
  }

  function pause() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  }

  function darkMode() {
    document.body.classList.toggle("light-theme");
    btnLight.classList.remove("hide");
    btnDark.classList.add("hide");
  }

  function lightMode() {
    document.body.classList.toggle("light-theme");
    btnLight.classList.add("hide");
    btnDark.classList.remove("hide");
  }

  return {
    play,
    pause,
    darkMode,
    lightMode,
  };
}
