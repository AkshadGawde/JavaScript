document.body.innerHTML = "hello";
document.title = "good job!";

//properties and methods
console.log(document.title);
document.title = "dom";

console.log(document.body);

document.body.innerHTML = "<button> Good Job</button>";

document.querySelector("button");
console.log(document.querySelector("button")); //querySelector can get any element form the page

console.log(document.querySelector("button").innerHTML);

document.querySelector("button").innerHTML = "Changed Btn";

document.querySelector(".js-btn");
console.log(document.querySelector(".js-btn"));

const buttonElement = document.querySelector(".js-btn");
console.log(buttonElement);
