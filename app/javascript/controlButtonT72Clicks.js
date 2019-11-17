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
    const buttonWind = document.querySelector("#wind");
    const buttonIWO = document.querySelector("#IWO");

    buttonWeerbeeld.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/WZqPDPC.jpg')"; // keringen
      buttonWeerbeeld.classList.toggle("control-button-active");
    });

    buttonWind.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/vX0qK7Y.png')"; // keringen
      buttonWind.classList.toggle("control-button-active");
    });

      buttonIWO.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/uRKc1xf.png')"; // keringen
      buttonIWO.classList.toggle("control-button-active");
    });

  };


   if(informatie){
    console.log("informatie excist")

    const buttonWegen = document.querySelector("#wegen");
    const buttonInwoners = document.querySelector("#inwoners");
    const buttonWatersysteem = document.querySelector("#watersysteem");


    buttonWegen.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/aXfGLma.jpg')"; // keringen
      buttonWegen.classList.toggle("control-button-active");
    });


    buttonInwoners.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/2eigQgG.jpg')"; // keringen
      buttonInwoners.classList.toggle("control-button-active");
    });

    buttonWatersysteem.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/CRiDXZc.jpg')"; // keringen
      buttonWatersysteem.classList.toggle("control-button-active");
    });


  };





  if(assets){
    console.log("assets excist")

    const buttonKeringen = document.querySelector("#keringen");
    const buttonKooysluis = document.querySelector("#kooysluis");
    const buttonKoopvaderschutsluis = document.querySelector("#koopvaderschutsluis");
    const buttonRWZI = document.querySelector("#RWZI");

    buttonKeringen.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/rkSJHaO.jpg')"; // keringen
      buttonKeringen.classList.toggle("control-button-active");
    });


    buttonKooysluis.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/XcQIRoO.png')"; // RWZI
      buttonKooysluis.classList.toggle("control-button-active");
    });

    buttonKoopvaderschutsluis.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/gQYW68a.png')";
      buttonKoopvaderschutsluis .classList.toggle("control-button-active");
    });

    buttonRWZI.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/QVkmsr1.png')";
      buttonRWZI.classList.toggle("control-button-active");
    });

  };


  if(hoogte){
    console.log("hoogte excist")

    const buttonGroterDan55meter = document.querySelector("#groterdan55meter");
    const buttonGroterDan45meter = document.querySelector("#groterdan45meter");
    const buttonGroterDan35meter = document.querySelector("#groterdan35meter");
    const buttonGroterDan25meter = document.querySelector("#groterdan25meter");
    const buttonGroterDan2meter = document.querySelector("#groterdan2meter");
    const buttonDroog = document.querySelector("#droog");

    buttonGroterDan55meter.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/VdXzd6A.jpg')";
      buttonGroterDan55meter.classList.toggle("control-button-active");
    });


    buttonGroterDan45meter.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/kXeXdxh.jpg')";
      buttonGroterDan45meter.classList.toggle("control-button-active");
    });

    buttonGroterDan35meter.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/tYYenB1.jpg')";
      buttonGroterDan35meter.classList.toggle("control-button-active");
    });

    buttonGroterDan25meter.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/X0jFy3E.jpg')";
      buttonGroterDan25meter.classList.toggle("control-button-active");
    });

    buttonGroterDan2meter.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/duJ3vOo.jpg')";
      buttonGroterDan2meter.classList.toggle("control-button-active");
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
