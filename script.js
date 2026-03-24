//Create the divs using JavaScript.
let container = document.querySelector(".container");
let total = 256;

function createContainer() {
  for (i = 0; i < total; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("column");
    changeColor(div);
  }
}

//Set up a “hover” effect so that the grid divs change color
// when your mouse passes over them

function changeColor(div) {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "red";
  });
}

/*
function reverseColor(div) {
  div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "pink";
  });
}
  */

//Create container
createContainer();
