const controlButtonWaterClicks = () => {

  const map = document.querySelector(".control-map");

  // SCENARIO 1 - 2 days 5.5meter water level
  const scenario1 = document.querySelector("#scenario1");
  const scenario2 = document.querySelector("#scenario2");

  if(scenario1){
    console.log("scenario 1 excist")
    const buttonS1T1u = document.querySelector("#S1T1u");
    const buttonS1T2u = document.querySelector("#S1T2u");
    const buttonS1T3u = document.querySelector("#S1T3u");
    const buttonS1T5u = document.querySelector("#S1T5u");
    const buttonS1T9u = document.querySelector("#S1T9u");
    const buttonS1T10u = document.querySelector("#S1T10u");
    const buttonS1T11u = document.querySelector("#S1T11u");
    const buttonS1T13u = document.querySelector("#S1T13u");
    const buttonS1T18u = document.querySelector("#S1T18u");
    const buttonS1T24u = document.querySelector("#S1T24u");
    const buttonS1T36u = document.querySelector("#S1T36u");
    const buttonS1Teind = document.querySelector("#S1Teind");

    const buttons = document.querySelectorAll(".control-button");


    buttonS1T1u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/8WON1JM.jpg')";
      buttonS1T1u.classList.toggle("control-button-active");
    });


    buttonS1T2u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/BKZzvbw.jpg')";
      buttonS1T2u.classList.toggle("control-button-active");
    });


    buttonS1T3u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/cNsFwJV.jpg')";
      buttonS1T3u.classList.toggle("control-button-active");
    });

    buttonS1T5u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/n7MEny0.jpg)";
      buttonS1T5u.classList.toggle("control-button-active");
    });


    buttonS1T9u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/0wZVQP5.jpg)";
      buttonS1T9u.classList.toggle("control-button-active");
    });

    buttonS1T10u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/YqcrpbA.jpg)";
      buttonS1T10u.classList.toggle("control-button-active");
    });

    buttonS1T11u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/nedMf8D.jpg)";
      buttonS1T11u.classList.toggle("control-button-active");
    });


    buttonS1T13u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/Kmg3Ivy.jpg)";
      buttonS1T13u.classList.toggle("control-button-active");
    });

    buttonS1T18u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/7O0wweb.jpg)";
      buttonS1T18u.classList.toggle("control-button-active");
    });


    buttonS1T24u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/zQqPYoo.jpg)";
      buttonS1T24u.classList.toggle("control-button-active");
    });


    buttonS1T36u.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/REvetLi.jpg)";
      buttonS1T36u.classList.toggle("control-button-active");
    });

    buttonS1Teind.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url(https://i.imgur.com/we8r3Rw.jpg)";
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

