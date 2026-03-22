//Create the divs using JavaScript.
const row = document.querySelector(".row");

let totalDivs = 16;

for (i = 0; i < totalDivs; i++) {
  const div = document.createElement("div");
  row.appendChild(div);
  div.classList.add("column");
}

//I need 16 divs in a row - Done!
//Now I need 16 rows of 16 divs for creating the 16x16 grid
//Discard previous idea of stacking 2 layouts on top of each since it didn't work as expected
