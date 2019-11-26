const controlButtonT24Clicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const scen2Pand = document.querySelector("#scen2-pand");
  const scen2Wegen = document.querySelector("#scen2-wegen");
  const impactS2 = document.querySelector("#impact-S2");
  const todo = document.querySelector("#todo");


  if (scen2Pand) {

    console.log("panden scen1 excist")

    const buttonS2P1u = document.querySelector("#S2P1u");
    const buttonS2P2u = document.querySelector("#S2P2u");
    const buttonS2P3u = document.querySelector("#S2P3u");
    const buttonS2P4u = document.querySelector("#S2P4u");
    const buttonS2P6u = document.querySelector("#S2P6u");
    const buttonS2P12u = document.querySelector("#S2P12u");
    const buttonS2P24u = document.querySelector("#S2P24u");
    const buttonS2P38u = document.querySelector("#S2P38u");


    buttonS2P1u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/swMjvX9.jpg')";
      buttonS2P1u.classList.toggle("control-button-active");
    });

    buttonS2P2u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/lnab2Rp.jpg')";
      buttonS2P2u.classList.toggle("control-button-active");
    });

    buttonS2P3u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/y19uncu.jpg')";
      buttonS2P3u.classList.toggle("control-button-active");
    });

    buttonS2P4u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/q0mgNgM.jpg')";
      buttonS2P4u.classList.toggle("control-button-active");
    });

    buttonS2P6u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/3xQjJMg.jpg')";
      buttonS2P6u.classList.toggle("control-button-active");
    });

    buttonS2P12u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/YY5SeZT.jpg')";
      buttonS2P12u.classList.toggle("control-button-active");
    });

    buttonS2P24u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/X60nNlp.jpg')";
      buttonS2P24u.classList.toggle("control-button-active");
    });

    buttonS2P38u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/WOfKf7Z.jpg')";
      buttonS2P38u.classList.toggle("control-button-active");
    });


  }



if (scen2Wegen) {

    console.log("panden scen1 excist")

    const buttonS2W1u = document.querySelector("#S2W1u");
    const buttonS2W2u = document.querySelector("#S2W2u");
    const buttonS2W3u = document.querySelector("#S2W3u");
    const buttonS2W4u = document.querySelector("#S2W4u");
    const buttonS2W6u = document.querySelector("#S2W6u");
    const buttonS2W12u = document.querySelector("#S2W12u");
    const buttonS2W24u = document.querySelector("#S2W24u");
    const buttonS2W38u = document.querySelector("#S2W38u");


    buttonS2W1u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/pWZWwgf.jpg')";
      buttonS2W1u.classList.toggle("control-button-active");
    });

    buttonS2W2u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/DNsXtKy.jpg')";
      buttonS2W2u.classList.toggle("control-button-active");
    });

    buttonS2W3u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/IaeefSJ.jpg')";
      buttonS2W3u.classList.toggle("control-button-active");
    });

    buttonS2W4u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/IsuWRUI.jpg')";
      buttonS2W4u.classList.toggle("control-button-active");
    });

    buttonS2W6u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/p5s01Jh.jpg')";
      buttonS2W6u.classList.toggle("control-button-active");
    });

    buttonS2W12u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/sR1lncX.jpg')";
      buttonS2W12u.classList.toggle("control-button-active");
    });

    buttonS2W24u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/gJJPTNT.jpg')";
      buttonS2W24u.classList.toggle("control-button-active");
    });

    buttonS2W38u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/klTecXZ.jpg')";
      buttonS2W38u.classList.toggle("control-button-active");
    });


  }




  if (impactS2) {

    console.log("impactS2")

    const buttonS2WaterDepth = document.querySelector("#S2-water-depth")
    const buttonS2PandDepth = document.querySelector("#S2-pand-depth")
    const buttonS2WegenDepth = document.querySelector("#S2-wegen-depth")
    const buttonCupureAfsluitingWater = document.querySelector("#coupure_afsluiting_water")


    buttonS2WaterDepth.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/pH4QOzt.jpg')";
      buttonS2WaterDepth.classList.toggle("control-button-active");
    });

    buttonS2PandDepth.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/sKkI2jb.jpg')";
      buttonS2PandDepth.classList.toggle("control-button-active");
    });

    buttonS2WegenDepth.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/arOs0ip.jpg')";
      buttonS2WegenDepth.classList.toggle("control-button-active");
    });

    buttonCupureAfsluitingWater.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/fC4dJI5.jpg')";
      buttonCupureAfsluitingWater.classList.toggle("control-button-active");
    });




  }





  if (todo) {

    console.log("todo")






  }





};


export {controlButtonT24Clicks}
