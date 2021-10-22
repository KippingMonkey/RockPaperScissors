//global variabels
let header = document.querySelector("h1");
let img1 = document.getElementById("img-left");
let img2 = document.getElementById("img-right");
let values = ["rock", "paper", "scissors"];
let rand1 = Math.floor(Math.random() * 3);
let rand2 = Math.floor(Math.random() * 3);
let resetbtn = document.getElementById("reset-btn");
let score = document.querySelector(".score");

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

function playGame() {
  let randImgLeft = `images/${values[rand1]}.png`;
  let randImgRight = `images/${values[rand2]}.png`;

  img1.setAttribute("src", randImgLeft);
  img2.setAttribute("src", randImgRight);

  if (rand1 == 0 && rand2 == 2) {
    header.textContent = "Player One Wins!";
    var newScore = Number(sessionStorage.getItem("p1Score")) + 1;
    sessionStorage.setItem("p1Score", newScore);
    score.textContent = `Score ${newScore} - ${Number(
      sessionStorage.getItem("p2Score")
    )}`;
  } else if (rand1 == 2 && rand2 == 0) {
    header.textContent = "Player Two Wins!";
    var newScore = Number(sessionStorage.getItem("p2Score")) + 1;
    score.textContent = `${Number(
      sessionStorage.getItem("p1Score")
    )} - ${newScore}`;
  } else if (rand1 == 1 && rand2 == 0) {
    header.textContent = "Player One Wins!";
    var newScore = Number(sessionStorage.getItem("p1Score")) + 1;
    sessionStorage.setItem("p1Score", newScore);
    score.textContent = `Score ${newScore} - ${Number(
      sessionStorage.getItem("p2Score")
    )}`;
  } else if (rand1 == 0 && rand2 == 1) {
    header.textContent = "Player Two Wins!";
    var newScore = Number(sessionStorage.getItem("p2Score")) + 1;
    score.textContent = `${Number(
      sessionStorage.getItem("p1Score")
    )} - ${newScore}`;
  } else if (rand1 == 2 && rand2 == 1) {
    header.textContent = "Player One Wins!";
    var newScore = Number(sessionStorage.getItem("p1Score")) + 1;
    sessionStorage.setItem("p1Score", newScore);
    score.textContent = `Score ${newScore} - ${Number(
      sessionStorage.getItem("p2Score")
    )}`;
  } else if (rand1 == 1 && rand2 == 2) {
    header.textContent = "Player Two Wins!";
    var newScore = Number(sessionStorage.getItem("p2Score")) + 1;
    score.textContent = `${Number(
      sessionStorage.getItem("p1Score")
    )} - ${newScore}`;
  } else {
    header.textContent = "Draw!";
    score.textContent = `${sessionStorage.getItem(
      "p1Score"
    )} - ${sessionStorage.getItem("p2Score")} `;
  }
}

resetbtn.addEventListener("click", () => {
  sessionStorage.clear();
  location.reload();
});
