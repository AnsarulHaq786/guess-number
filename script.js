const secretNumber=Math.floor(Math.random()*100+1);
let tryCount=0;
let userNumber=document.getElementById("input").value;
let resultText=document.getElementById("result-text");
const submitButton=document.getElementById("submit-button");
let resultImg=document.getElementById("result-img");
let result=document.getElementsByClassName("result");

submitButton.addEventListener('click', ()=> {
    let userNumber=document.getElementById("input").value;
    if(userNumber<secretNumber)
        {
            tryCount++;
            resultText.innerText="Oops your expectations are too low, try higher number!";
            resultImg['src']="./images/cat-holding-uparrow-board.webp"
        }
            
        else if(userNumber>secretNumber)
        {
            tryCount++;
            resultText.innerText="Oops you are over confident, try smaller number!";
            resultImg['src']="./images/cat-holding-downarrow-board.png"
        }     
        else
        {
            resultText.innerText="Congratulations!, Accept the provided gift by clicking on the gift box.";
            resultImg['src']="./images/cat-holding-giftbox.webp";
            var aTag = document.createElement('a');
            aTag.setAttribute('href',"https://youtu.be/xvFZjo5PgG0?autoplay=1");
            result[0].appendChild(aTag);
            aTag.appendChild(resultImg);
        }
});