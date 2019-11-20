const controlButtonT72Clicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const situatie = document.querySelector("#situatie");
  const informatie = document.querySelector("#informatie");
  const assets = document.querySelector("#assets");
  const hoogte = document.querySelector("#hoogte");



  if(situatie){
    console.log("situatie excist")

    const buttonWeerbeeld = document.querySelector("#weerbeeld");
    const buttonRegios = document.querySelector("#regios");

    buttonWeerbeeld.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/bRsreRH.png')";
      buttonWeerbeeld.classList.toggle("control-button-active");
    });

    buttonRegios.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/36ftVAk.png')";
      buttonRegios.classList.toggle("control-button-active");
    });


  };


   if(informatie){
    console.log("informatie excist")

    const buttonWegen = document.querySelector("#wegen");
    const buttonInwoners = document.querySelector("#inwoners");


    buttonWegen.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/egmOG0C.jpg')"; // keringen
      buttonWegen.classList.toggle("control-button-active");
    });


    buttonInwoners.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/2eigQgG.jpg')"; // keringen
      buttonInwoners.classList.toggle("control-button-active");
    });



  };




  if(assets){
    console.log("assets excist")

    const buttonKeringen = document.querySelector("#keringen");

    buttonKeringen.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/rkSJHaO.jpg')"; // keringen
      buttonKeringen.classList.toggle("control-button-active");
    });


  };


  if(hoogte){
    console.log("hoogte excist")

    const buttonGroterDan55meter = document.querySelector("#groterdan55meter");
    const buttonGroterDan25meter = document.querySelector("#groterdan25meter");
    const buttonDroog = document.querySelector("#droog");

    buttonGroterDan55meter.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/VdXzd6A.jpg')";
      buttonGroterDan55meter.classList.toggle("control-button-active");
    });


    buttonGroterDan25meter.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/X0jFy3E.jpg')";
      buttonGroterDan25meter.classList.toggle("control-button-active");
    });


    buttonDroog.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/0xyYPaR.jpg')";
      buttonDroog.classList.toggle("control-button-active");
    });




  };






};


export {controlButtonT72Clicks}
