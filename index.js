const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
// const colors = ["red", "blue", "green", "orange", "yellow", "purple"];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(el) {
  let color = getRandomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `;
}

function removeColor(el) {
  el.style.background = "#252624";
  el.style.boxShadow = `0 0 2px #000 `;
}

function getRandomColor() {
  // let index = Math.floor(Math.random() * colors.length);
  // return colors[index];
  let randomColor = `rgb(${random()}, ${random()}, ${random()})`;
  console.log(randomColor);
  return randomColor;
}

let random = () => Math.floor(Math.random() * 255);
