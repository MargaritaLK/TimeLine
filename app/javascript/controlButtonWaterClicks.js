const controlButtonWaterClicks = () => {

  const map = document.querySelector(".control-map");

  // SCENARIO 1 - 2 days 5.5meter water level
  const scenario1 = document.querySelector("#scenario1");
  const scenario2 = document.querySelector("#scenario2");

  if(scenario1){
    console.log("scenario 1 excist")
    const buttonS1T1 = document.querySelector("#S1T1");
    const buttonS1T2 = document.querySelector("#S1T2");
    const buttonS1T3 = document.querySelector("#S1T3");
    const buttonS1T4 = document.querySelector("#S1T4");
    const buttonS1T5 = document.querySelector("#S1T5");
    const buttonS1T6 = document.querySelector("#S1T6");
    const buttonS1T7 = document.querySelector("#S1T7");
    const buttonS1T8 = document.querySelector("#S1T8");

    const buttons = document.querySelectorAll(".control-button");


    buttonS1T1.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/cTNGlJ7.jpg')"; // 1 uur
      buttonS1T1.classList.toggle("control-button-active");
    });


    buttonS1T2.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/7bO7OE6.jpg')"; // 3 uur
      buttonS1T2.classList.toggle("control-button-active");
    });


    buttonS1T3.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/Asj8qdW.jpg)"; // 6 uur
      buttonS1T3.classList.toggle("control-button-active");
    });


    buttonS1T4.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/NycKo2X.jpg)"; // 9 uur
      buttonS1T4.classList.toggle("control-button-active");
    });


    buttonS1T5.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/NoAhe18.jpg)"; // 12 uur
      buttonS1T5.classList.toggle("control-button-active");
    });


    buttonS1T6.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/gCkkwu8.jpg)"; // 24 uur
      buttonS1T6.classList.toggle("control-button-active");
    });


    buttonS1T7.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/UFZvNxd.jpg)"; // 36 uur
      buttonS1T7.classList.toggle("control-button-active");
    });

    buttonS1T8.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/U618VC9.jpg)"; // eind - 48uur
      buttonS1T8.classList.toggle("control-button-active");
    });

  }



    if(scenario2){
    console.log("scenario 2 excist")
    const buttonS2T1 = document.querySelector("#S2T1");
    const buttonS2T2 = document.querySelector("#S2T2");
    const buttonS2T3 = document.querySelector("#S2T3");
    const buttonS2T4 = document.querySelector("#S2T4");
    // const buttonS2T5 = document.querySelector("#S2T5");
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
      map.style.backgroundImage = "url('https://i.imgur.com/3vKsb1t.jpg')"; // 3uur
      buttonS2T2.classList.toggle("control-button-active");
    });


    buttonS2T3.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/mAPeXeq.jpg')"; // 6UUR
      buttonS2T3.classList.toggle("control-button-active");
    });

    buttonS2T4.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/i5u3rL5.jpg')"; // 12 uur
      buttonS2T4.classList.toggle("control-button-active");
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

