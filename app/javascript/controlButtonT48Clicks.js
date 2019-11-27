const controlButtonT48Clicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const impactS1 = document.querySelector("#impact-S1");
  const waterdepthZones = document.querySelector("#waterdepth-zones");


  if (impactS1) {

    console.log("impactS1")

    const buttonS1WaterDepth = document.querySelector("#S1-water-depth")
    const buttonS1PandDepth = document.querySelector("#S1-pand-depth")
    const buttonS1WegenDepth = document.querySelector("#S1-wegen-depth")
    const buttonCupureAfsluiting = document.querySelector("#coupure_afsluiting")

    buttonS1WaterDepth.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/gzOaNHX.jpg')";
      buttonS1WaterDepth.classList.toggle("control-button-active");
    });

    buttonS1PandDepth.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/OQIxP7P.jpg')";
      buttonS1PandDepth.classList.toggle("control-button-active");
    });

    buttonS1WegenDepth.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/oaG7tM4.jpg')";
      buttonS1WegenDepth.classList.toggle("control-button-active");
    });

    buttonCupureAfsluiting.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/4L39D31.jpg')";
      buttonCupureAfsluiting.classList.toggle("control-button-active");
    });




  }




};


export {controlButtonT48Clicks}
