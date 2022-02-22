var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

document.querySelector("img").setAttribute("src","images/dice"+randomNumber1+".png"); //changes the image source to that of one of the dice

document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png"); //changes the image source to that of one of the dice

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw"
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player One Wins!"
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player Two Wins! 🚩"
}
