const controlButtonT24Clicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const scen1Pand = document.querySelector("#scen1-pand");


  if (scen1Pand) {

    console.log("panden scen1 excist")

    const buttonS1Pmd = document.querySelector("#S1Pmd")

    const buttonS1P1u = document.querySelector("#S1P1u");
    const buttonS1P2u = document.querySelector("#S1P2u");
    const buttonS1P4u = document.querySelector("#S1P4u");
    const buttonS1P6u = document.querySelector("#S1P6u");
    const buttonS1P12u = document.querySelector("#S1P12u");
    const buttonS1P24u = document.querySelector("#S1P24u");
    const buttonS1P38u = document.querySelector("#S1P38u");


    buttonS1Pmd.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/AzX0kjK.jpg')";
      buttonS1Pmd.classList.toggle("control-button-active");
    });

    buttonS1P1u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/swMjvX9.jpg')";
      buttonS1P1u.classList.toggle("control-button-active");
    });

    buttonS1P2u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/lnab2Rp.jpg')";
      buttonS1P2u.classList.toggle("control-button-active");
    });

    buttonS1P4u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/q0mgNgM.jpg')";
      buttonS1P4u.classList.toggle("control-button-active");
    });

    buttonS1P6u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/3xQjJMg.jpg')";
      buttonS1P6u.classList.toggle("control-button-active");
    });

    buttonS1P12u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/YY5SeZT.jpg')";
      buttonS1P12u.classList.toggle("control-button-active");
    });

    buttonS1P24u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/X60nNlp.jpg')";
      buttonS1P24u.classList.toggle("control-button-active");
    });

    buttonS1P38u.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/WOfKf7Z.jpg')";
      buttonS1P38u.classList.toggle("control-button-active");
    });



  }




};


export {controlButtonT24Clicks}
