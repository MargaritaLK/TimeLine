const controlButtonDoorbraakClicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const doorbraakOperatie = document.querySelector("#doorbraak-operatie");



  if(doorbraakOperatie){
    console.log("doorbraakOperatie excist")

    const buttonDroog = document.querySelector("#droog");

    buttonDroog.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/nZfA889.jpg')";
      buttonDroog.classList.toggle("control-button-active");
    });



  };







};


export {controlButtonDoorbraakClicks}
