const controlButtonWaterClicks = () => {

  const map = document.querySelector(".control-map");

  // SCENARIO 1 - 2 days 5.5meter water level
  const scenario1 = document.querySelector("#scenario1");
  const scenario2 = document.querySelector("#scenario2");

  if(scenario1){
    console.log("scenario 1 excist")
    const buttonS1T1u = document.querySelector("#S1T1u");
    const buttonS1T3u = document.querySelector("#S1T3u");
    const buttonS1T6u = document.querySelector("#S1T6u");
    const buttonS1T9u = document.querySelector("#S1T9u");
    const buttonS1T12u = document.querySelector("#S1T12u");
    const buttonS1T24u = document.querySelector("#S1T24u");
    const buttonS1T36u = document.querySelector("#S1T36u");
    const buttonS1Teind = document.querySelector("#S1Teind");

    const buttons = document.querySelectorAll(".control-button");


    buttonS1T1u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/cTNGlJ7.jpg')"; // 1 uur
      buttonS1T1u.classList.toggle("control-button-active");
    });


    buttonS1T3u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/7bO7OE6.jpg')"; // 3 uur
      buttonS1T3u.classList.toggle("control-button-active");
    });


    buttonS1T6u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/Asj8qdW.jpg)"; // 6 uur
      buttonS1T6u.classList.toggle("control-button-active");
    });


    buttonS1T9u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/NycKo2X.jpg)"; // 9 uur
      buttonS1T9u.classList.toggle("control-button-active");
    });


    buttonS1T12u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/NoAhe18.jpg)"; // 12 uur
      buttonS1T12u.classList.toggle("control-button-active");
    });


    buttonS1T24u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/gCkkwu8.jpg)"; // 24 uur
      buttonS1T24u.classList.toggle("control-button-active");
    });


    buttonS1T36u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/UFZvNxd.jpg)"; // 36 uur
      buttonS1T36u.classList.toggle("control-button-active");
    });

    buttonS1Teind.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/U618VC9.jpg)"; // eind - 48uur
      buttonS1Teind.classList.toggle("control-button-active");
    });

  }



    if(scenario2){
    console.log("scenario 2 excist")
    const buttonS2T1 = document.querySelector("#S2T1");
    const buttonS2T2 = document.querySelector("#S2T2");
    const buttonS2T3 = document.querySelector("#S2T3");
    const buttonS2T4 = document.querySelector("#S2T4");
    const buttonS2T5 = document.querySelector("#S2T5");
    // const buttonS2T6 = document.querySelector("#S2T6");
    const buttonS2T7 = document.querySelector("#S2T7");

    const buttons = document.querySelectorAll(".control-button");


    buttonS2T1.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/R3aLvkk.jpg')"; // 1 uur
      buttonS2T1.classList.toggle("control-button-active");
    });


    buttonS2T2.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/RaJyX5k.jpg')"; // 2uur
      buttonS2T2.classList.toggle("control-button-active");
    });


    buttonS2T3.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/3vKsb1t.jpg')"; // 3uur
      buttonS2T3.classList.toggle("control-button-active");
    });


    buttonS2T4.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/mAPeXeq.jpg')"; // 6UUR
      buttonS2T4.classList.toggle("control-button-active");
    });

    buttonS2T5.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/i5u3rL5.jpg')"; // 12 uur
      buttonS2T5.classList.toggle("control-button-active");
    });


    buttonS2T7.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/967PiDX.jpg)"; // eind - 38uur
      buttonS2T7.classList.toggle("control-button-active");
    });


  }







};






export {controlButtonWaterClicks}

