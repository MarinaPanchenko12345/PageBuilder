let divContainer = document.querySelector(".myDiv");

//create aside
let aside = document.createElement("aside");
aside.style.backgroundImage =
  "url(https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxzcGFjZXxlbnwwfHwwfHx8MA%3D%3D)";

divContainer.appendChild(aside);
aside.className = "myAside";

//create newDiv
let newDiv = document.createElement("div");
newDiv.style.backgroundColor = "white";

divContainer.appendChild(newDiv);
newDiv.className = "newDiv";

//create h1
let h1 = document.createElement("h1");
h1.innerHTML = "Page Builder";

//create p
let p = document.createElement("p");
p.innerHTML = "For change Background Color of page enter your new parameters";

//create label
let label = document.createElement("label");
label.innerHTML = "Background Color";

//create imput
let input = document.createElement("input");
input.type = "text";
input.placeholder = "enter the new Bg Color";

//create button
let button = document.createElement("button");
button.innerHTML = "Add";
button.style.background = " rgba(214, 62, 100, 0.978)";

//adding elements to aside
aside.appendChild(h1);
aside.appendChild(p);
aside.appendChild(label);
aside.appendChild(input);
aside.appendChild(button);

function userColor() {
  let colorU = input.value;
  newDiv.style.backgroundColor = colorU;
}
button.addEventListener("click", userColor);
userColor();


