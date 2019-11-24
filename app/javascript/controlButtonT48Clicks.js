const controlButtonT48Clicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const impactWater = document.querySelector("#impact-water");
  const waterdepthZones = document.querySelector("#waterdepth-zones");


  if (impactWater) {

    console.log("impactWater")

    const buttonS1PandDepth = document.querySelector("#S1-pand-depth")
    const buttonMaxWaterdepth = document.querySelector("#max-waterdepth")

    buttonS1PandDepth.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/OQIxP7P.jpg')";
      buttonS1PandDepth.classList.toggle("control-button-active");
    });

    buttonMaxWaterdepth.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/gzOaNHX.jpg')";
      buttonMaxWaterdepth.classList.toggle("control-button-active");
    });

  }




};


export {controlButtonT48Clicks}
