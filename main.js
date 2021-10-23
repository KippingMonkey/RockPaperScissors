//global variabels
let header = document.querySelector("h1");
let img1 = document.getElementById("img-left");
let img2 = document.getElementById("img-right");
let values = ["rock", "paper", "scissors"];
let rand1 = Math.floor(Math.random() * 3);
let rand2 = Math.floor(Math.random() * 3);
let resetbtn = document.getElementById("reset-btn");
let score = document.querySelector(".score");

checkFirstLoad();

showRandomImagesInGame();

playGame();

//Missing: Declare Winner (first to 11). Add "rules-btn" top right corner

//event listener to reset page to first load
resetbtn.addEventListener("click", () => {
  sessionStorage.clear();
  location.reload();
});
function checkFirstLoad() {
  // Check if the page has been loaded before by looking for data saved in sessionStorage
  if (sessionStorage.getItem("firstLoad")) {
    playGame();
  }
  //if it loading for the first time, save "firstLoad" in sessionStorage
  else {
    sessionStorage.setItem("firstLoad", true);
    sessionStorage.setItem("p1Score", 0);
    sessionStorage.setItem("p2Score", 0);
  }
}

function showRandomImagesInGame() {
  let randImgLeft = `images/${values[rand1]}.png`;
  let randImgRight = `images/${values[rand2]}.png`;

  img1.setAttribute("src", randImgLeft);
  img2.setAttribute("src", randImgRight);
}

function playGame() {
  if (
    (rand1 == 0 && rand2 == 2) ||
    (rand1 == 1 && rand2 == 0) ||
    (rand1 == 2 && rand2 == 1)
  ) {
    header.textContent = "Player One Wins!";
    updateScorePlayer1();
  } else if (
    (rand1 == 2 && rand2 == 0) ||
    (rand1 == 0 && rand2 == 1) ||
    (rand1 == 1 && rand2 == 2)
  ) {
    header.textContent = "Player Two Wins!";
    updateScorePlayer2();
  } else {
    header.textContent = "Draw!";
    score.textContent = `${Number(
      sessionStorage.getItem("p1Score")
    )} - ${Number(sessionStorage.getItem("p2Score"))} `;
  }
}

function updateScorePlayer1() {
  var newScore = Number(sessionStorage.getItem("p1Score")) + 1;
  sessionStorage.setItem("p1Score", newScore);
  score.textContent = `${newScore} - ${Number(
    sessionStorage.getItem("p2Score")
  )}`;
}

function updateScorePlayer2() {
  var newScore = Number(sessionStorage.getItem("p2Score")) + 1;
  sessionStorage.setItem("p2Score", newScore);
  score.textContent = `${Number(
    sessionStorage.getItem("p1Score")
  )} - ${newScore}`;
}
