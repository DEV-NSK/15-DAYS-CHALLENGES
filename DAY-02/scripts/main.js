const outputBox = document.getElementById("output-box");
let currentInput = "";
let lastAnswer = "";

const buttons = document.querySelectorAll(".numbers > button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if(value === "RESET") {
        currentInput=""
        outputBox.textContent="";
    }
    else if (value === "ANS") {
      try {
        lastAnswer = eval(currentInput);   
        outputBox.textContent = lastAnswer;
        currentInput = lastAnswer.toString(); 
      } catch (e) {
        outputBox.textContent = "Error";
        currentInput = "";
      }
    } 
    else if (["+","-","*","/"].includes(value)) {
        currentInput += `${value}`
        outputBox.textContent = currentInput;
    }
    else {
        currentInput += value;
        outputBox.textContent = currentInput;
    }
  })
});


// TRAFFIC LIGHTS
const circles = document.querySelectorAll(".circle");
const button = document.querySelectorAll("#traffic-btn > button");

button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    circles.forEach(circle => {
      circle.style.backgroundColor = "rgb(201, 201, 201)";
    });

    if (btn.textContent === "RED") {
      circles[0].style.backgroundColor = "red";
    } else if (btn.textContent === "YELLOW") {
      circles[1].style.backgroundColor = "yellow";
    } else if (btn.textContent === "GREEN") {
      circles[2].style.backgroundColor = "green";
    }
  });
});
