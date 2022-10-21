
var drumButtons = document.querySelectorAll(".drum");

//Detecting button press by mouse click
for(var i=0; i<drumButtons.length; i++){
  drumButtons[i].addEventListener("click", function (){
      console.log(this.innerHTML); //this will give the identity of the button clicked
      var buttonInnerHTML = this.innerHTML;

      playSoundOnKeyPress(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);

  });
}


//detecting keyboard press

document.addEventListener("keydown",function (event) {
  playSoundOnKeyPress(event.key); //event.key will give which key is pressed
  buttonAnimation(event.key);
});

function playSoundOnKeyPress(char){
  switch (char) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;


    default: console.log(buttonInnerHTML);

  }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey); //to select the class of button currentKey have w then class will be .w;
    activeButton.classList.add("pressed");

    //now we want a delay of some millisecond and then remove class pressed, so that it gives animation effect.
    //for that purpose we will use setTimeout function
    //Syntax : setTimeout(function, milliseconds, param1, param2, ...)

    setTimeout(function (){
      activeButton.classList.remove("pressed");
    }, 100); //after 100 millisecond it will remove the class pressed from button

}
