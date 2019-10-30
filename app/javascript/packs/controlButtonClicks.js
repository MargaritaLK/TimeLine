const controlButtonClicks = () => {

  const map = document.querySelector(".control-map");
  const buttonScen1_24uur = document.querySelector("#scen1_24uur");

  buttonScen1_24uur.addEventListener("click", event => {
    console.log("it works")
    console.log(buttonScen1_24uur)
    map.style.setProperty(`background-image`, `url(https://i.imgur.com/Y2a03bT.jpg)`);
    buttonScen1_24uur.classList.toggle("control-button-active");

  });



};


export {controlButtonClicks}
