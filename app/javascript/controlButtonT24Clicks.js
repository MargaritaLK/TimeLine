const controlButtonT24Clicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const scen2Pand = document.querySelector("#scen2-pand");


  if (scen2Pand) {

    console.log("panden scen1 excist")

    const buttonS2Pmd = document.querySelector("#S2Pmd")

    const buttonS2P1u = document.querySelector("#S2P1u");
    const buttonS2P2u = document.querySelector("#S2P2u");
    const buttonS2P4u = document.querySelector("#S2P4u");
    const buttonS2P6u = document.querySelector("#S2P6u");
    const buttonS2P12u = document.querySelector("#S2P12u");
    const buttonS2P24u = document.querySelector("#S2P24u");
    const buttonS2P38u = document.querySelector("#S2P38u");


    buttonS2Pmd.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/qfw1GiU.jpg')";
      buttonS2Pmd.classList.toggle("control-button-active");
    });

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




};


export {controlButtonT24Clicks}
