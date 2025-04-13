let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
homeScoreCount=0;
guestScoreCount=0;

function homeAdd1() {
  homeScoreCount += 1;
  homeScore.textContent = homeScoreCount;
}
function homeAdd2() {
  homeScoreCount += 2;
  homeScore.textContent = homeScoreCount;
}
function homeAdd3() {
  homeScoreCount += 3;
  homeScore.textContent = homeScoreCount;
}
function guestAdd1() {
  guestScoreCount += 1;
  guestScore.textContent = guestScoreCount;
}
function guestAdd2() {
  guestScoreCount += 2;
  guestScore.textContent = guestScoreCount;
}
function guestAdd3() {
  guestScoreCount += 3;
  guestScore.textContent = guestScoreCount;
}