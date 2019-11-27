const controlButtonSystemClicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const systemPropagation1 = document.querySelector("#system-propagation1");
  const systemPropagation2 = document.querySelector("#system-propagation2");
  const systemCriticalPoint1 = document.querySelector("#system-critical-point1");



  if(systemPropagation1){
    console.log("systemPropagation1 excist")

    const buttonQS1T0u30 = document.querySelector("#QS1T0u30");
    const buttonQS1T1u00 = document.querySelector("#QS1T1u00");
    const buttonQS1T1u30 = document.querySelector("#QS1T1u30");
    const buttonQS1T2u00 = document.querySelector("#QS1T2u00");
    const buttonQS1T2u30 = document.querySelector("#QS1T2u30");
    const buttonQS1T3u00 = document.querySelector("#QS1T3u00");
    const buttonQS1T3u30 = document.querySelector("#QS1T3u30");
    const buttonQS1T4u00 = document.querySelector("#QS1T4u00");
    const buttonQS1T4u30 = document.querySelector("#QS1T4u30");
    // const buttonQS1T5u00 = document.querySelector("#QS1T5u00");


    buttonQS1T0u30.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/1JQqvYE.jpg')";
      buttonQS1T0u30.classList.toggle("control-button-active");
    });

    buttonQS1T1u00.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/VZiRx1h.jpg')";
      buttonQS1T1u00.classList.toggle("control-button-active");
    });

    buttonQS1T1u30.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/wrUmoO9.jpg')";
      buttonQS1T1u30.classList.toggle("control-button-active");
    });

    buttonQS1T2u00.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/myktdEA.jpg')";
      buttonQS1T2u00.classList.toggle("control-button-active");
    });

    buttonQS1T2u30.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/EIiVflp.jpg')";
      buttonQS1T2u30.classList.toggle("control-button-active");
    });

    buttonQS1T3u00.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/70fmnbp.jpg')";
      buttonQS1T3u00.classList.toggle("control-button-active");
    });

    buttonQS1T3u30.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/rJzk395.jpg')";
      buttonQS1T3u30.classList.toggle("control-button-active");
    });

    buttonQS1T4u00.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/ol1sVV6.jpg')";
      buttonQS1T4u00.classList.toggle("control-button-active");
    });

    buttonQS1T4u30.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/NB3M59G.jpg')";
      buttonQS1T4u30.classList.toggle("control-button-active");
    });

    // buttonQS1T5u00.addEventListener("click", event => {
    //    buttons.forEach(button => {
    //      button.classList.remove("control-button-active");
    //   });
    //   map.style.backgroundImage = "url('https://i.imgur.com/na7reyp.jpg')";
    //   buttonQS1T5u00.classList.toggle("control-button-active");
    // });


  };



  if(systemPropagation2){
    console.log("systemPropagation2 excist")

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
