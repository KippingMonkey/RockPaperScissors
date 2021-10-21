//global variabels
let header = document.querySelector("h1");
let img1 = document.getElementById("img-left");
let img2 = document.getElementById("img-right");
let values = ["rock", "paper", "scissors"];
let rand1 = Math.floor(Math.random() * 3);
let rand2 = Math.floor(Math.random() * 3);
let resetbtn = document.getElementById("reset-btn");

// Check if the page has been loaded before by looking for data saved in sessionStorage
if (sessionStorage.getItem("firstLoad")) {
  playGame();
}
//if it loading for the first time, save "firstLoad" in sessionStorage
else {
  sessionStorage.setItem("firstLoad", true);
}

function playGame() {
  let randImgLeft = `images/${values[rand1]}.png`;
  let randImgRight = `images/${values[rand2]}.png`;

  img1.setAttribute("src", randImgLeft);
  img2.setAttribute("src", randImgRight);

  if (rand1 == 0 && rand2 == 2) {
    header.textContent = "Player One Wins!";
  } else if (rand1 == 2 && rand2 == 0) {
    header.textContent = "Player Two Wins!";
  } else if (rand1 == 1 && rand2 == 0) {
    header.textContent = "Player One Wins!";
  } else if (rand1 == 0 && rand2 == 1) {
    header.textContent = "Player Two Wins!";
  } else if (rand1 == 2 && rand2 == 1) {
    header.textContent = "Player One Wins!";
  } else if (rand1 == 1 && rand2 == 2) {
    header.textContent = "Player Two Wins!";
  } else {
    header.textContent = "Draw!";
  }
}

resetbtn.addEventListener("click", () => {
  sessionStorage.removeItem("firstLoad", true);
  location.reload();
});
