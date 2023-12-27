const cards = document.querySelectorAll(".card");

function flipCard() {
  this.classList.toggle("flip");
}

cards.forEach((card) => card.addEventListener("click", flipCard));

//Timer, antal & starta om
const timeDropdown = document.getElementById("timeDropdown");
const countdownElement = document.getElementById("countdown");
const flipsCountElement = document.getElementById("flipsCount");
const restartButton = document.getElementById("restartButton");

let countdown;
let flipsCount = 0;

function startCountdown(seconds) {
  let timer = seconds;
  countdown = setInterval(() => {
    countdownElement.textContent = `${timer}s`;
    if (timer <= 0) {
      clearInterval(countdown);
      countdownElement.textContent = "Tiden är ute!";
    }
    timer--;
  }, 1000);
}

timeDropdown.addEventListener("change", function () {
  clearInterval(countdown);
  countdownElement.textContent = "";
  startCountdown(parseInt(this.value));
});

restartButton.addEventListener("click", function () {
  flipsCount++;
  flipsCountElement.querySelector("b").textContent = flipsCount;
  clearInterval(countdown);
  countdownElement.textContent = "";
  startCountdown(parseInt(timeDropdown.value));
});

$(document).ready(function () {
  $("#timeDropdown").niceSelect2();
});
