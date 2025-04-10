let numbers = document.querySelector(".numbers");
let number = document.querySelector(".number");
let calculate = document.querySelector(".calculate");
let display = document.querySelector(".display");

let button1 = document.createElement("button");
button1.textContent = "1";
button1.className = "button";
number.appendChild(button1);

let button2 = document.createElement("button");
button2.textContent = "2";
button2.className = "button";
number.appendChild(button2);

let button3 = document.createElement("button");
button3.textContent = "3";
button3.className = "button";
number.appendChild(button3);

let button4 = document.createElement("button");
button4.textContent = "4";
button4.className = "button";
number.appendChild(button4);

let button5 = document.createElement("button");
button5.textContent = "5";
button5.className = "button";
number.appendChild(button5);

let button6 = document.createElement("button");
button6.textContent = "6";
button6.className = "button";
number.appendChild(button6);

let button7 = document.createElement("button");
button7.textContent = "7";
button7.className = "button";
number.appendChild(button7);

let button8 = document.createElement("button");
button8.textContent = "8";
button8.className = "button";
number.appendChild(button8);

let button9 = document.createElement("button");
button9.textContent = "9";
button9.className = "button";
number.appendChild(button9);

let button0 = document.createElement("button");
button0.textContent = "0";
button0.className = "button";  // Changed to "button" for consistency
number.appendChild(button0);

// Create operation buttons
let add = document.createElement("button");
add.textContent = "+";
add.className = "add";
calculate.appendChild(add);

let divide = document.createElement("button");
divide.textContent = "/";
divide.className = "add";
calculate.appendChild(divide);

let subtraction = document.createElement("button");
subtraction.textContent = "-";
subtraction.className = "add";
calculate.appendChild(subtraction);

let multiply = document.createElement("button");
multiply.textContent = "*";
multiply.className = "add";
calculate.appendChild(multiply);

let equals = document.createElement("button");
equals.textContent = "=";
equals.className = "equals";  // Changed to differentiate from operators
calculate.appendChild(equals);

let firstNum = "";
let operator = "";
let secondNum = "";

// Add event listeners to number buttons
let allButtons = document.querySelectorAll(".button");
allButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        console.log(button.textContent);
    });
});

let operationButtons = document.querySelectorAll(".add");
operationButtons.forEach(opButton => {
    opButton.addEventListener("click", () => {
        firstNum = display.textContent;
        operator = opButton.textContent;
        display.textContent = "";
        console.log("Operator: " + operator);
        console.log("First number: " + firstNum);
    });
});

equals.addEventListener("click", () => {
    secondNum = display.textContent;
    console.log("Second number: " + secondNum);
    
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(secondNum);
    let result;
    
    if (operator === "+") result = num1 + num2;
    else if (operator === "-") result = num1 - num2;
    else if (operator === "*") result = num1 * num2;
    else if (operator === "/") {
        if (num2 === 0) result = "Error";
        else result = num1 / num2;
    }
    
    display.textContent = result;
    console.log("Result: " + result);
});

let clearButton = document.createElement("button");
clearButton.textContent = "C";
clearButton.className = "clear";
calculate.appendChild(clearButton);

clearButton.addEventListener("click", () => {
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    operator = "";
});