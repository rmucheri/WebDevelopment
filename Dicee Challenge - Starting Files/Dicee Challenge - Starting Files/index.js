var randomNumber = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber + ".png");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber1 + ".png");


if(randomNumber>randomNumber1){
  document.querySelector("h1").innerHTML = "Tasha Wins1";
}
else if(randomNumber1>randomNumber){
  document.querySelector("h1").innerHTML = "Dad Wins2";
}
else{
  document.querySelector("h1").innerHTML = "Dad & Tasha TIE!!!!!";
}
