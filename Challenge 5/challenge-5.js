const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter");

let compteur = 0;
increase.addEventListener("click", function () {
  compteur++;
  counter.textContent = compteur;
  if (compteur >= 10) {
    counter.style.color = "green";
  } else {
    counter.style.color = "blue";
  }
});

decrease.addEventListener("click", function () {
    if (compteur > 0) {
        compteur--;
    }
    if (compteur < 10) {
      counter.style.color = "blue";
    }
  counter.textContent = compteur;
});

reset.addEventListener("click", function () {
  compteur = 0;
  counter.textContent = compteur;
  counter.style.color = "blue";
});
