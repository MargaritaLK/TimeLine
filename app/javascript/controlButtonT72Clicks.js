const controlButtonT72Clicks = () => {


  const map = document.querySelector(".control-map");
  const t72 = document.querySelector("#T72");


  if(t72){
    console.log("t72 excist")

    const buttons = document.querySelectorAll(".control-button");

    const buttonKeringen = document.querySelector("#keringen");
    const buttonKooysluis = document.querySelector("#kooysluis");
    const buttonKoopvaderschutsluis = document.querySelector("#koopvaderschutsluis");
    const buttonRWZI = document.querySelector("#RWZI");


    buttonKeringen.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/fnpnesM.jpg')"; // keringen
      buttonKeringen.classList.toggle("control-button-active");
    });


    buttonKooysluis .addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/BrkVAO4.png')"; // RWZI
      buttonKooysluis.classList.toggle("control-button-active");
    });

    buttonKoopvaderschutsluis.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/KHogjLN.png')"; // RWZI
      buttonKoopvaderschutsluis .classList.toggle("control-button-active");
    });





    buttonRWZI.addEventListener("click", event => {
       buttons.forEach(button => {
         button.classList.remove("control-button-active");
      });
      map.style.backgroundImage = "url('https://i.imgur.com/tdgMjtq.png')"; // RWZI
      buttonRWZI.classList.toggle("control-button-active");
    });




};

};


export {controlButtonT72Clicks}
