// Check if the page has been loaded before by looking for data saved in sessionStorage
if (sessionStorage.getItem("firstLoad")) {
  playGame();
}
//if it loading for the first time, save "firstLoad" in sessionStorage
else {
  sessionStorage.setItem("firstLoad", true);
}

//global variabels
let header = document.querySelector("h1");
let img1 = document.getElementById("img-left");
let img2 = document.getElementById("img-right");
let values = ["rock", "paper", "scissors"];
let rand1 = Math.floor(Math.random() * 3);
let rand2 = Math.floor(Math.random() * 3);

function playGame() {
  let randImgLeft = `images/${values[rand1]}.png`;
  let randImgRight = `images/${values[rand2]}.png`;

  img1.setAttribute("src", randImgLeft);
  img2.setAttribute("src", randImgRight);

  changeHeader();
}
//Change header according to outcome (ie. Rock breaks Scissors)
function changeHeader() {}
