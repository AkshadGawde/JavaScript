function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-btn");
  if (buttonElement.innerHTML === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
  } else {
    buttonElement.innerHTML = "Subscribe";
  }
}
