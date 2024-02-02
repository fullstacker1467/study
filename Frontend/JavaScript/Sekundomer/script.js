const html_seconds = document.querySelector(".seconds");
const html_minutes = document.querySelector(".minutes");
const html_milSeconds = document.querySelector(".milSeconds");
const startTime = document.querySelector(".start");
const stopTime = document.querySelector(".stop");
const resetTime = document.querySelector(".reset");
const container = document.querySelector(".container");

let interval;
let sekundlar = 0;
let minutlar = 0;
let miliSekundlar = 0;
function sana() {
  miliSekundlar++;
  html_milSeconds.innerHTML = miliSekundlar;
  if (miliSekundlar >= 99) {
    sekundlar++;
    html_seconds.innerHTML = sekundlar;
    miliSekundlar = 0;
  }
  if (sekundlar >= 59) {
    minutlar++;
    html_minutes.innerHTML = minutlar;
    sekundlar = 0;
  }
  if (miliSekundlar <= 9) {
    html_milSeconds.innerHTML = "0" + miliSekundlar;
  }
  if (sekundlar <= 9) {
    html_seconds.innerHTML = "0" + sekundlar;
  }
  if (minutlar <= 9) {
    html_minutes.innerHTML = "0" + minutlar;
  }
  if (sekundlar == 5) {
    container.style.background = "red";
  } else if (sekundlar == 15) {
    container.style.background = "blue";
  } else if (sekundlar == 25) {
    container.style.background = "green";
  } else if (sekundlar == 35) {
    container.style.background = "yellow";
  } else if (sekundlar == 45) {
    container.style.background = "brown";
  }
}

startTime.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(sana, 10);
});

stopTime.addEventListener("click", () => {
  clearInterval(interval);
  container.style.background = "black";
});

resetTime.addEventListener("click", () => {
  clearInterval(interval);
  minutlar = 0;
  sekundlar = 0;
  miliSekundlar = 0;
  html_milSeconds.innerHTML = "0" + miliSekundlar;
  html_seconds.innerHTML = "0" + sekundlar;
  html_minutes.innerHTML = "0" + minutlar;
  container.style.background = "white";
});
