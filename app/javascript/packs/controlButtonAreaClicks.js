const controlButtonAreaClicks = () => {

  const map = document.querySelector(".control-map");
  const inwoners = document.querySelector("#inwoners");

  const clickinwoners = () => {
    if (inwoners) {
      inwoners.addEventListener("click", event => {
          console.log("it works")
          map.style.setProperty(`background-image`, `url(https://i.imgur.com/VGkDxDA.jpg)`);
          inwoners.classList.toggle("control-button-active");
      });
    };
  };



};


export {controlButtonAreaClicks}



