let fName = document.querySelector("#first-name");
let lName = document.querySelector("#last-name");
let message = document.querySelector("textarea");
let email = document.querySelector("#email-adress");
let subBtn = document.querySelector("button");
let cardForm = document.querySelector(".card-form");
let allInput = document.querySelectorAll("input");
let first = document.querySelector(".styling");
let allLabel = document.querySelectorAll("label");
let messageValue = document.querySelectorAll("div")[12];
console.log(messageValue);
let geneQuery = false;
let suppRequest = false;
let consented = false;
let regName = /[a-zA-Z]/g;
let regEmail = /(\w+|\d+)@\w+.\w+/g;
subBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    regName.test(allInput[0].value) &&
    regName.test(allInput[1].value) &&
    regEmail.test(allInput[2].value) &&
    regName.test(message.value) &&
    allInput[0].value !== "" &&
    allInput[1].value !== "" &&
    allInput[2].value !== "" &&
    message.value !== ""
  ) {
    console.log("msg", messageValue.childNodes[0].nodeValue);

    console.log("from submission");
    console.log(regEmail.test(allInput[2].value));

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
    // Input Logic

    //  else if (regName.test(allInput[1].value) === false) {
    //   allInput[1].style.border = "1px solid red";
    //   let texted = allLabel[1];

    //   texted.style.color = "red";
    //   texted.style.marginLeft = "auto";
    //   texted.innerText = `incorrect ${allLabel[1].textContent}`;
    // }
  } else {
    if (regName.test(message.value) === false) {
      message.style.border = "1px solid red";
      // let texted = allLabel[i];
      // let msgVal = messageValue.childNodes[0].nodeValue;
      messageValue.style.marginLeft = "auto";
      messageValue.textContent = `incorrect ${messageValue.textContent}`;
      messageValue.style.color = "red";
      console.log("error");
    }

    allInput.forEach((e, i) => {
      if (e.value !== "" && regName.test(e.value) === false) {
        console.log(allLabel[i].innerText);
        e.style.border = "1px solid red";
        let texted = allLabel[i];

        texted.style.color = "red";
        texted.style.marginLeft = "auto";
        texted.innerText = `incorrect ${allLabel[i].textContent}`;
        console.log("error");
        console.log(texted);
        // first.append(texted);
      } else if (e.type === "email" && regEmail.test(e.value) === false) {
        // console.log("is it email", e.value);
        // console.log("chof trah", regEmail.test(e.value) === true);
        // console.log("chof trah", e.type === "email");
        e.style.border = "1px solid red";
        let texted = allLabel[i];

        texted.style.color = "red";
        texted.style.marginLeft = "auto";
        texted.innerText = `incorrect ${allLabel[i].textContent}`;
        console.log("error");
        console.log(texted);
      }
    });

    //Message Logic
  }
});
