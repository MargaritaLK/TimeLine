const controlButtonDoorbraakClicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const doorbraakOperatie = document.querySelector("#doorbraak-operatie");



  if(doorbraakOperatie){
    console.log("doorbraakOperatie excist")

    const buttonTriage4uur = document.querySelector("#triage_4uur");
    const buttonTriage6uur = document.querySelector("#triage_6uur");
    const buttonTriage12uur = document.querySelector("#triage_12uur");
    const buttonTriageMax = document.querySelector("#triage_max");

    const buttonTriage4uurZoom1 = document.querySelector("#triage_4uur_zoom1");
    const buttonTriage6uurZoom1 = document.querySelector("#triage_6uur_zoom1");
    const buttonTriage12uurZoom1 = document.querySelector("#triage_12uur_zoom1");
    const buttonTriageMaxZoom1 = document.querySelector("#triage_max_zoom1");

    buttonTriage4uur.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/Df2Zdhf.jpg')";
      buttonTriage4uur.classList.toggle("control-button-active");
    });

    buttonTriage6uur.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/bxnJWko.jpg')";
      buttonTriage6uur.classList.toggle("control-button-active");
    });

    buttonTriage12uur.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/ODxLD0t.jpg')";
      buttonTriage12uur.classList.toggle("control-button-active");
    });

    buttonTriageMax.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/H0QmZob.jpg')";
      buttonTriageMax.classList.toggle("control-button-active");
    });



    buttonTriage4uurZoom1.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/bfpIINS.jpg')";
      buttonTriage4uurZoom1.classList.toggle("control-button-active");
    });

    buttonTriage6uurZoom1.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/BkXqgqS.jpg')";
      buttonTriage6uurZoom1.classList.toggle("control-button-active");
    });

    buttonTriage12uurZoom1.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/fXrF01r.jpg')";
      buttonTriage12uurZoom1.classList.toggle("control-button-active");
    });

    buttonTriageMaxZoom1.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/F2HxluC.jpg')";
      buttonTriageMaxZoom1.classList.toggle("control-button-active");
    });



  };







};


export {controlButtonDoorbraakClicks}
