//Create the divs using JavaScript.
const container = document.querySelector(".container");
//Add a button on the top of the screen that will send the user a popup asking for the
// number of squares per side for the new grid.

let total = 256; //16*16 default size

createGrid(total);

function createGrid(total) {
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

//Leave a 16x16 grid as default -- Done
//The button should only activate when clicking it -- Done
//The button should be able to generate a new grid -- Done
// Remove the old grid and add the new grid -- Done
// When creating a new sketch, the grid elements should take up all the space

const button = document.querySelector(".btn");
//Creating new container
button.addEventListener("click", () => {
  let total = prompt("Enter the size of the grid");
  container.replaceChildren();
  createGrid(total);
});
