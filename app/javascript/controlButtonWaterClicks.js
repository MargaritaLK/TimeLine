const controlButtonWaterClicks = () => {

  const map = document.querySelector(".control-map");

  const buttonS1T1 = document.querySelector("#S1T1");
  const buttonS1T2 = document.querySelector("#S1T2");


  buttonS1T1.addEventListener("click", event => {
    map.classList.toggle("mapS1T1");
    buttonS1T1.classList.toggle("control-button-active");
  })

  buttonS1T2.addEventListener("click", event => {
    map.classList.toggle("mapS1T2");
    buttonS1T2.classList.toggle("control-button-active");
  })


};


export {controlButtonWaterClicks}

