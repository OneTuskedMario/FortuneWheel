var content = document.getElementById("wheel");
var spin = document.getElementById("button");
var tick = 0;
var cycle = 6*360; //6 spins
var prize = 0;

spin.onclick = function() { //button click function for spin

  // injects button styles in css to appear pressed in
  spin.style.backgroundColor = "#476eb4";
  spin.style.opacity = "0.6";
  spin.style.boxShadow = "0 3px 1.5px #666";
  spin.style.transform = "translate(0%, 14%)";
  spin.style.pointerEvents = "none";
  document.getElementById("text").innerHTML = "";
  //random int injected into the rotation for random spins
  tick++;
  cycles = Math.ceil(Math.random() * 360) + (cycle*tick); //random spin plus normal spins
  content.style.transform = "rotate(" + cycles + "deg)"; //rotate the wheel
  console.log(cycles);
  prize = Math.ceil((cycles % 360) / 45); //divide the wheel to determine prize
  console.log(prize);
  return prize;
};

content.ontransitionend = function(){

  //prize update directly on win
  switch (prize){
    case 1:
      document.getElementById("text").innerHTML = "Red!";
      break;
    case 2:
      document.getElementById("text").innerHTML = "Purple!";
      break;
    case 3:
      document.getElementById("text").innerHTML = "Violet!";
      break;
    case 4:
      document.getElementById("text").innerHTML = "Blue!";
      break;
    case 5:
      document.getElementById("text").innerHTML = "Cyan!";
      break;
    case 6:
      document.getElementById("text").innerHTML = "Green!";
      break;
    case 7:
      document.getElementById("text").innerHTML = "Yellow!";
      break;
    case 8:
      document.getElementById("text").innerHTML = "Orange!";
      break;}

  //injects button styles in css to make button appear available again
  spin.style.boxShadow = "0 5px 1.5px #999";
  spin.style.opacity = "1";
  spin.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  spin.style.transform = "translate(0%, 0%)";
  spin.style.pointerEvents = "auto";

};
