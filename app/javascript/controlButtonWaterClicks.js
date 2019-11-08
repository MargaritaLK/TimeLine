const controlButtonWaterClicks = () => {

  const map = document.querySelector(".control-map");

  const buttonS1T1 = document.querySelector("#S1T1");
  const buttonS1T2 = document.querySelector("#S1T2");
  const buttonS1T3 = document.querySelector("#S1T3");
  const buttonS1T4 = document.querySelector("#S1T4");
  const buttonS1T5 = document.querySelector("#S1T5");
  const buttonS1T6 = document.querySelector("#S1T6");
  const buttonS1T7 = document.querySelector("#S1T7");


  buttonS1T1.addEventListener("click", event => {
    map.classList.toggle("mapS1T1");
    buttonS1T1.classList.toggle("control-button-active");
  });

  buttonS1T2.addEventListener("click", event => {
    map.classList.toggle("mapS1T2");
    buttonS1T2.classList.toggle("control-button-active");
  });

  buttonS1T3.addEventListener("click", event => {
    map.classList.toggle("mapS1T3");
    buttonS1T3.classList.toggle("control-button-active");
  });

  buttonS1T4.addEventListener("click", event => {
    map.classList.toggle("mapS1T4");
    buttonS1T4.classList.toggle("control-button-active");
  });

  buttonS1T5.addEventListener("click", event => {
    map.classList.toggle("mapS1T5");
    buttonS1T5.classList.toggle("control-button-active");
  });

  buttonS1T6.addEventListener("click", event => {
    map.classList.toggle("mapS1T6");
    buttonS1T6.classList.toggle("control-button-active");
  });

  buttonS1T7.addEventListener("click", event => {
    map.classList.toggle("mapS1T7");
    buttonS1T7.classList.toggle("control-button-active");
  });



};


export {controlButtonWaterClicks}

