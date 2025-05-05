let fName = document.querySelector("#first-name");
let lName = document.querySelector("#last-name");
let message = document.querySelector("#message-area");
let email = document.querySelector("#email-adress");
let subBtn = document.querySelector("button");
let cardForm = document.querySelector(".card-form");

subBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("from submission");

  let div = document.createElement("div");
  let p = document.createElement("p");
  let head = document.createElement("h3");
  let successIcon = document.createElement("i");
  successIcon.className = "fa-regular fa-circle-check";
  let textHead = document.createTextNode("Message Sent!");
  p.textContent = "Thanks For Completing The form,we will be in touch soon";
  div.style.backgroundColor = "#2c4246";
  div.style.height = "100px";
  div.style.width = "480px";
  div.style.color = "white";
  successIcon.style.backgroundColor = "#2c4246";
  successIcon.style.height = "7px";
  div.style.transform = "translate(8%, -86%)";
  div.style.padding = "8px";
  head.prepend(successIcon);
  head.appendChild(textHead);
  div.appendChild(head);
  div.appendChild(p);
  div.className = "pop-up-style";
  div.style.position = "absolute";
  cardForm.prepend(div);
});
