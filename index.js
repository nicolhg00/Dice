var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImgSource = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSource);


var randomNumbuer2 = Math.floor(Math.random() * 6) + 1;

var randomImgSource2 = "images/" + "dice" + randomNumber1 + ".png";

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

if (randomNumber1 > randomNumbuer2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumbuer2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
