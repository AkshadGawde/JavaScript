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

//////////////////////////////////////////////////////////////////////////////
// Accessing an element by ID
let elementById = document.getElementById("myElementId");

// Accessing elements by class name
let elementsByClassName = document.getElementsByClassName("myClassName");

// Accessing elements by tag name
let elementsByTagName = document.getElementsByTagName("div");

// Accessing an element using CSS selector
let elementByQuerySelector = document.querySelector(
  "#myElementId .myClassName"
);

// Accessing multiple elements using CSS selector
let elementsByQuerySelectorAll = document.querySelectorAll(".myClassName");
///////////////////////////////////////////////////////////////////////////////////////

// Changing text content of an element
elementById.textContent = "New Text Content";

// Changing HTML content of an element
elementById.innerHTML = "<strong>New HTML Content</strong>";

// Adding a class to an element
elementById.classList.add("newClass");

// Removing a class from an element
elementById.classList.remove("oldClass");

// Changing CSS styles of an element
elementById.style.color = "red";

// Adding an event listener to an element
elementById.addEventListener("click", function () {
  alert("Element clicked!");
});

// Removing an event listener from an element
elementById.removeEventListener("click", clickHandlerFunction);

//////////////////////////////////////////////////////////////////////////////////////////
// Creating a new element
let newElement = document.createElement("div");
newElement.textContent = "New Element";

// Appending the new element to an existing element
document.body.appendChild(newElement);

///////////////////////////////////////////////////////////////////////////////////////////
// Traversing through child nodes of an element
let parentNode = elementById.parentNode;
let childNodes = parentNode.childNodes;

// Accessing the first and last child nodes
let firstChild = parentNode.firstChild;
let lastChild = parentNode.lastChild;

// Accessing next and previous sibling nodes
let nextSibling = elementById.nextSibling;
let previousSibling = elementById.previousSibling;
