//Create the divs using JavaScript.
const container = document.querySelector(".container");

let total = 256;

function createContainer() {
  for (i = 0; i < total; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("column");
  }
}

createContainer();
