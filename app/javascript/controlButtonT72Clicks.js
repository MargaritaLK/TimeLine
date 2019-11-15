const controlButtonT72Clicks = () => {


  const map = document.querySelector(".control-map");

  const t72 = document.querySelector("#T72");


  if(t72){
    console.log("t72 excist")

    const buttonzuivering = document.querySelector("#zuivering");

    const buttons = document.querySelectorAll(".control-button");


    buttonzuivering.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/bxzNZXZ.png')"; // 1 uur
      buttonzuivering.classList.toggle("control-button-active");
    });




};

};


export {controlButtonT72Clicks}
