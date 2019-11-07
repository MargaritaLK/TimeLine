const controlButtonAreaClicks = () => {

const map = document.querySelector(".control-map");

const inwoners = document.querySelector("#inwoners");


inwoners.addEventListener("click", event => {
    map.classList.toggle("mapG1");
    inwoners.classList.toggle("control-button-active");
  })

};

export {controlButtonAreaClicks}



