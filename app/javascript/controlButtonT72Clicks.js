const controlButtonT72Clicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const situatie = document.querySelector("#situatie");
  const assets = document.querySelector("#assets");
  const inhabitants = document.querySelector("#inhabitants");
  const hoogte = document.querySelector("#hoogte");



  if(situatie){
    console.log("situatie excist")

    const buttonWeerbeeld = document.querySelector("#weerbeeld");
    const buttonWind = document.querySelector("#wind");
    const buttonRegios = document.querySelector("#regios");

    buttonWeerbeeld.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/bRsreRH.png')";
      buttonWeerbeeld.classList.toggle("control-button-active");
    });

    buttonWind.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/WZqPDPC.jpg')";
      buttonWind.classList.toggle("control-button-active");
    });

    buttonRegios.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/Qe14Ngy.png')";
      buttonRegios.classList.toggle("control-button-active");
    });


  };

   if(assets){
    console.log("assets excist")

    const buttonKeringen = document.querySelector("#keringen");
    const buttonWegen = document.querySelector("#wegen");
    const buttonVitaleAssets = document.querySelector("#vitale-assets");
    const buttonKeringenVitaleAssets = document.querySelector("#keringen-vitale-assets");

    buttonKeringen.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/kUeGSHu.jpg')";
      buttonKeringen.classList.toggle("control-button-active");
    });

    buttonWegen.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/5ZICmaA.jpg')";
      buttonWegen.classList.toggle("control-button-active");
    });

    buttonVitaleAssets.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/tPxD4jj.jpg')";
      buttonVitaleAssets.classList.toggle("control-button-active");
    });

    buttonKeringenVitaleAssets.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/8wRxhC2.jpg')";
      buttonKeringenVitaleAssets.classList.toggle("control-button-active");
    });

  };



   if(inhabitants){
    console.log("inhabitants excist")
    const buttonInwoners = document.querySelector("#inwoners");
    const buttonnNetZelfredzamen = document.querySelector("#niet-zelfredzamen");


    buttonInwoners.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/2eigQgG.jpg')"; // keringen
      buttonInwoners.classList.toggle("control-button-active");
    });

    buttonnNetZelfredzamen.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/r60Cs8l.jpg')"; // keringen
      buttonnNetZelfredzamen.classList.toggle("control-button-active");
    });



  };




  if(hoogte){
    console.log("hoogte excist")

    const buttonhHogtekaart = document.querySelector("#hoogtekaart");
    const buttonGroterDan55meter = document.querySelector("#groterdan55meter");
    const buttonGroterDan25meter = document.querySelector("#groterdan25meter");
    const buttonDroog = document.querySelector("#droog");

    buttonhHogtekaart.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/9l1B1TD.jpg')";
      buttonhHogtekaart.classList.toggle("control-button-active");
    });

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
      map.style.backgroundImage = "url('https://i.imgur.com/nZfA889.jpg')";
      buttonDroog.classList.toggle("control-button-active");
    });




  };






};


export {controlButtonT72Clicks}
