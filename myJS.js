/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/

const colorBtn = document.getElementById("color-block");
const colorTag = document.getElementById("center-text");
colorBtn.addEventListener("click", changeColor);

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(colorBtn.style.backgroundColor === "rgb(240, 128, 128)"
       || colorBtn.style.backgroundColor === "#F08080"
       || colorBtn.style.backgroundColor === ""){
        console.log("clicked1");
        //change the background color using JS
        colorBtn.style.backgroundColor = "#abd6d0";
        //Change the text of the color using the span id color-name
        colorTag.textContent = "The color is: #ABD6D0";
    }else{
        console.log(colorBtn.style.backgroundColor);
        //change the background color using JS
        colorBtn.style.backgroundColor = "#f08080";
        //Change the text of the color using the span id color-name
        colorTag.textContent = "The color is: #F08080";
        console.log("clicked2");
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

const submitBtn = document.getElementById("convertbtn");
let convertedText = document.getElementById("c-output");
let response = "";
let converted = "";
submitBtn.addEventListener("click", convertTemp);

function convertTemp(){
    response = document.getElementById("f-input").value;
    converted = (parseInt(response)-32)*(5/9);
    convertedText.textContent = converted;
}
