//Create the divs using JavaScript.
const containerColumn = document.querySelector(".containerColumn");
const containerRow = document.querySelector(".containerRow");

let totalDivs = 16;

for (i = 0; i < totalDivs; i++) {
  const div = document.createElement("div");
  containerColumn.appendChild(div);
  div.textContent = "Hi! I am a div";
}

for (i = 0; i < totalDivs; i++) {
  const div = document.createElement("div");
  containerRow.appendChild(div);
  div.textContent = "Hi! I am also a div";
}

//I need 16 divs in row
//And 16 divs in column for them to cross each other
//Now I need to make both of them stack on top of each other
//Then highlight the div lines for creating the grid setup
