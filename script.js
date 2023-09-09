function add(a, b) {
  console.log(a + b);
}
function subtract(a, b) {
  console.log(a >= b ? a - b : b - a);
}
function multiply(a, b) {
  console.log(a * b);
}
function divide(a, b) {
  console.log(a / b);
}

let num1, num2, oper;
function validExpression(expression) {
  try {
    math.evaluate(expression);
    return true;
  } catch (error) {
    return false;
  }
}

function evaluate(expression) {
  const result = math.evaluate(expression);
  return result;
}

const button = Array.from(document.querySelectorAll("button"));
let display = document.querySelector("#display");
let expression = "";
button.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonclass = e.target.className;
    const buttonText = e.target.textContent;
    const buttonId = e.target.id;

    if (buttonclass === "number" || buttonclass === "oper") {
      expression = expression + buttonText;
      display.innerHTML = expression;
    } else if (buttonId === "clear") {
      expression = "";
      display.innerHTML = 0;
    } else if (buttonId === "equal") {
      if (validExpression(expression)) {
        const result = evaluate(expression);
        display.innerHTML = result;
        expression = result.toString();
      }
    }
    else if(buttonId==="backspace"){
        expression=expression.slice(0,-1);
        display.innerText=expression;
    }

    if (expression==="" ||expression==="-") {
        display.innerText='0';
    }
  });
});

function operate() {
  if (oper === "+") {
    console.log(add(num1, num2));
  } else if (oper === "-") {
    console.log(subtract(num1, num2));
  } else if (oper === "*") {
    console.log(multiply(num1, num2));
  } else if (oper === "/") {
    console.log(divide(num1, num2));
  }
}
