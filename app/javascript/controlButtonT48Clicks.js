const controlButtonT48Clicks = () => {


  const map = document.querySelector(".control-map");
  const buttons = document.querySelectorAll(".control-button");

  const impactWater = document.querySelector("#impact-water");
  const waterdepthZones = document.querySelector("#waterdepth-zones");


  if (impactWater) {

    console.log("impactWater")

    const buttonS1Pmd = document.querySelector("#S1Pmd")

    buttonS1Pmd.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/OQIxP7P.jpg')";
      buttonS1Pmd.classList.toggle("control-button-active");
    });

  }

  if (waterdepthZones) {

    console.log("waterdepthZones exicsit")

    const buttonWaterdepthWC = document.querySelector("#waterdepth_wc")

    buttonWaterdepthWC.addEventListener("click", event => {
      buttons.forEach(button => {
        button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/xvDKlDv.jpg')";
      buttonWaterdepthWC.classList.toggle("control-button-active");
    });

  }




};


export {controlButtonT48Clicks}
