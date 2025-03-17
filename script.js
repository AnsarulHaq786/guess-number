const secretNumber = Math.floor(Math.random() * 100 + 1);
let userNumber = document.getElementById("input").value;
let resultText = document.getElementById("result-text");
const submitButton = document.getElementById("submit-button");
let resultImg = document.getElementById("result-img");
let result = document.getElementsByClassName("result");
let themeToggle = document.getElementById("theme-toggle");

const batmanButton="./images/bat.png";
const batmanThinking="./images/batman-curioius-thinking.webp";
const batmanUp="./images/batman-holding-uparrow-board.webp";
const batmanDown="./images/batman-holding-uparrow-board.webp";
const batmanGift="./images/batman-holding-giftbox.webp";

const catButton="./images/cat.png";
const catThinking="./images/cat-thinking-curious.webp";
const catUp="./images/cat-holding-uparrow-board.webp";
const catDown="./images/cat-holding-downarrow-board.png";
const catGift="./images/cat-holding-giftbox.webp";

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "batman" ? "cat" : "batman";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  if (theme === "batman") {
    themeToggle.innerText = "🐱";
  } else {
    themeToggle.innerText = "🦇";
  }
});

window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "cat";
  document.documentElement.setAttribute("data-theme", savedTheme);
};

submitButton.addEventListener("click", () => {
  let userNumber = document.getElementById("input").value;
  if (userNumber < secretNumber) {
    resultText.innerText =
      "Oops your expectations are too low, try higher number!";
      resultImg.src = document.documentElement.getAttribute('data-theme') == 'batman' ? "./images/batman-holding-uparrow-board.webp": "./images/cat-holding-uparrow-board.webp";
  } else if (userNumber > secretNumber) {
    resultText.innerText = "Oops you are over confident, try smaller number!";
    resultImg.src = document.documentElement.getAttribute(
      "data-theme" == "batman"
        ? "./images/batman-holding-downarrow-board.webp"
        : "./images/cat-holding-downarrow-board.png"
    );
  } else {
    resultText.innerText =
      "Congratulations!, Accept the provided gift by clicking on the gift box.";
    resultImg.src = document.documentElement.getAttribute(
      "data-theme" == "batman"
        ? "./images/batman-holiding-giftbox.webp"
        : "./images/cat-holding-giftbox.webp"
    );
    var aTag = document.createElement("a");
    aTag.setAttribute("href", "https://youtu.be/xvFZjo5PgG0?autoplay=1");
    result[0].appendChild(aTag);
    aTag.appendChild(resultImg);
  }
});
