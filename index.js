const nameSubmitButton = document.querySelector(".name-submit-btn");
const greetingRequest = document.querySelector(".greeting-request");

nameSubmitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const clientName = document.querySelector("#client-name").value;
  const greetingCard = document.querySelector("#greeting-card");

  if (clientName === "") {
    alert("Please enter your name.");
    return;
  } else {
    let personalizedMessage = document.createElement("p");

    personalizedMessage.textContent = `Hello, ${clientName}! Nice to meet you, thanks for trying this exercise. Have a great day!`;

    document.getElementById("greeting-card").appendChild(personalizedMessage);

    document.getElementById("greeting-card").classList.add("greeting-msg");

    greetingRequest.style.display = "none";
  }

  setTimeout(function () {
    greetingRequest.style.display = "block";
    greetingCard.style.display = "none";
    greetingCard.classList.remove("greeting-msg");
    document.querySelector("#client-name").value = "";
    // window.location.reload();
  }, 5000);
});

let colorArray = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
];

const colorButton = document.querySelector(".bg-changer-btn");

colorButton.addEventListener("click", function () {
  const bgSection = document.querySelector("#bg-changer");

  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

  bgSection.style.backgroundColor = randomColor;
  bgSection.classList.add("bg-transition");
});
