const secretNumber = Math.floor(Math.random() * 100 + 1);
const themeToggle = document.getElementById("theme-toggle");
const themeToggleImage = document.getElementById("theme-toggle_image");
const submitButton = document.getElementById("submit-button");
const result = document.getElementsByClassName("result");
let resultImg = document.getElementById("result-img");
let resultText = document.getElementById("result-text");

const batmanButton="./images/bat.png";
const batmanThinking="./images/batman-curioius-thinking.webp";
const batmanUp="./images/batman-holding-uparrow-board.webp";
const batmanDown="./images/batman-holding-downarrow-board.webp";
const batmanGift="./images/batman-holding-giftbox.webp";

const catButton="./images/cat.png";
const catThinking="./images/cat-thinking-curious.webp";
const catUp="./images/cat-holding-uparrow-board.webp";
const catDown="./images/cat-holding-downarrow-board.png";
const catGift="./images/cat-holding-giftbox.webp";

const lowText="Oops your expectations are too low, try higher number!";
const highText="Oops you are over confident, try smaller number!";
const congratsText="Congratulations!, Accept the provided gift by clicking on the gift box.";

let text="";
let catImage=catThinking;
let batmanImage=batmanThinking;

function saveData(newTheme) {
  localStorage.setItem("theme", newTheme);
  localStorage.setItem("themeImage", themeToggleImage.src);
  localStorage.setItem("resultImg", resultImg.src)
  localStorage.setItem("resultText", resultText.innerText);
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "batman" ? "cat" : "batman";

  document.documentElement.setAttribute("data-theme", newTheme);
  if (newTheme === "batman") {
    themeToggleImage.src = catButton;
    resultImg.src = batmanImage;
    resultText.innerText = text;
  }
  else {
    themeToggleImage.src = batmanButton;
    resultImg.src = catImage;
    resultText.innerText = text;
  }
  saveData(newTheme); 
});


submitButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme"); 
  let userNumber = document.getElementById("input").value;
  if(userNumber<secretNumber) {
    resultText.innerText = lowText;
    resultImg.src=currentTheme == "batman"? batmanUp : catUp;
    text=lowText;
    catImage=catUp;
    batmanImage=batmanUp;
  }
  else if(userNumber>secretNumber) {
    resultText.innerText = highText;
    resultImg.src=currentTheme == "batman"? batmanDown : catDown;
    text=highText;
    catImage=catDown;
    batmanImage=batmanDown;
  }
  else{
    resultText.innerText = congratsText;
    resultImg.src=currentTheme == "batman"? batmanGift : catGift;
    text=congratsText;
    catImage=catGift;
    batmanImage=batmanGift;
    let existingLink = result[0].querySelector("a");
    if (!existingLink) {
      var aTag = document.createElement("a");
      aTag.setAttribute("href", "https://youtu.be/xvFZjo5PgG0?autoplay=1");
      result[0].appendChild(aTag);
      aTag.appendChild(resultImg);
    }
  }
  saveData(currentTheme);
});

window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "cat";
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggleImage.src = localStorage.getItem("themeImage") || batmanButton;
  resultImg.src = localStorage.getItem("resultImg") || catThinking;
  resultText.innerText = localStorage.getItem("resultText");
};