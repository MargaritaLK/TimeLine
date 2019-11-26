const controlButtonSystemClicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const systemPropagation1 = document.querySelector("#system-propagation1");
  const systemCriticalPoint1 = document.querySelector("#system-critical-point1");



  if(systemPropagation1){
    console.log("systemModel excist")

    const buttonQloc1_9u30 = document.querySelector("#Qloc1_9u30");
    const buttonQloc1_9u45 = document.querySelector("#Qloc1_9u45");
    const buttonQloc1_10u00 = document.querySelector("#Qloc1_10u00");

    buttonQloc1_9u30.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/SOdLoIj.png')";
      buttonQloc1_9u30.classList.toggle("control-button-active");
    });

    buttonQloc1_9u45.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/SSZwsH3.png')";
      buttonQloc1_9u45.classList.toggle("control-button-active");
    });

    buttonQloc1_10u00.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/0ubMj2R.png')";
      buttonQloc1_10u00.classList.toggle("control-button-active");
    });


  };



  if(systemCriticalPoint1){
    console.log("critical-point1")

    const buttonCP1STopview = document.querySelector("#CP1_topview");
    const buttonCP1SSideview = document.querySelector("#CP1_sideview");


    buttonCP1STopview.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/SbZBMUD.png')";
      buttonCP1STopview.classList.toggle("control-button-active");
    });

    buttonCP1SSideview.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/BENLlgM.jpg')";
      buttonCP1SSideview.classList.toggle("control-button-active");
    });


  };








};


export {controlButtonSystemClicks}
