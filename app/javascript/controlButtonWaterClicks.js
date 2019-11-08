const controlButtonWaterClicks = () => {

  const map = document.querySelector(".control-map");

  // SCENARIO 1 - 2 days 5.5meter water level
  const scenario1 = document.querySelector("#scenario1");

  if(scenario1){
    console.log("scenario 1 excist")
    const buttonS1T1 = document.querySelector("#S1T1");
    const buttonS1T2 = document.querySelector("#S1T2");
    const buttonS1T3 = document.querySelector("#S1T3");
    const buttonS1T4 = document.querySelector("#S1T4");
    const buttonS1T5 = document.querySelector("#S1T5");
    const buttonS1T6 = document.querySelector("#S1T6");
    const buttonS1T7 = document.querySelector("#S1T7");

    const buttons = document.querySelectorAll(".control-button");


    buttonS1T1.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/xTP1nQn.png')"; // 1 uur
      buttonS1T1.classList.toggle("control-button-active");
    });


    buttonS1T2.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/8Z4mFw4.png')"; // 3 uur
      buttonS1T2.classList.toggle("control-button-active");
    });


    buttonS1T3.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/DMuXbdq.png)"; // 6 uur
      buttonS1T3.classList.toggle("control-button-active");
    });


    buttonS1T4.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/6DpDMMh.png)"; // 9 uur
      buttonS1T4.classList.toggle("control-button-active");
    });


    buttonS1T5.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/Q2tMWsB.png)"; // 12 uur
      buttonS1T5.classList.toggle("control-button-active");
    });


    buttonS1T6.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/yIDUoq5.png)"; // 15 uur
      buttonS1T6.classList.toggle("control-button-active");
    });


    buttonS1T7.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/n2girIi.png)"; // 18 uur
      buttonS1T7.classList.toggle("control-button-active");
    });


    // buttonS1T7.addEventListener("click", event => {
    //   map.classList.toggle("mapS1T7");
    //   buttonS1T7.classList.toggle("control-button-active");
    // });

  }

};


export {controlButtonWaterClicks}

