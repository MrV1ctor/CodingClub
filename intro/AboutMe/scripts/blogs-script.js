let paragraph = "text text text text text"; 
let description = document.createElement("p");

description.textContent = paragraph;
description.classList.add("desc");

document.querySelector("body").appendChild(description);