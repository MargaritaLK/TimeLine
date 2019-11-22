const controlButtonT48Clicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const maxDepth = document.querySelector("#max-depth");


  if (maxDepth) {

    console.log("maxDepthexcist")

    const buttonS1Pmd = document.querySelector("#S1Pmd")
    const buttonS2Pmd = document.querySelector("#S2Pmd")

    buttonS1Pmd.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/OQIxP7P.jpg')";
      buttonS1Pmd.classList.toggle("control-button-active");
    });


    buttonS2Pmd.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/qfw1GiU.jpg')";
      buttonS2Pmd.classList.toggle("control-button-active");
    });



  }




};


export {controlButtonT48Clicks}
