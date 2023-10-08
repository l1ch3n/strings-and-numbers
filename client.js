const titleText = "Code Journal";

document.querySelector("#page-title").innerText = titleText;

const pageHeader = document.querySelector("header");

const navList = document.querySelectorAll(".list-item");

document.querySelector(".list-item").innerText = "learn JS";
document.querySelectorAll(".list-item")[1].innerText = "understand JS";
document.querySelectorAll(".list-item")[2].innerText = "prosper";

// initialize variable
let ducks = 0;

// function to change the number of ducks
function increaseCount() {
  ducks++;
  document.querySelector("#count").innerHTML = ducks;
}

function decreaseCount() {
  ducks--;
  document.querySelector("#count").innerHTML = ducks;
}

function clearCount() {
  ducks = 0;
  document.querySelector("#count").innerHTML = ducks;
}

// add an event handler to the button
document.querySelector("#increase-count").onclick = increaseCount

document.querySelector("#decrease-count").addEventListener("click", () => {
  decreaseCount();
})

document.querySelector("#clear").onclick = clearCount;

