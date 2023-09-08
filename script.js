function add(a,b){
    console.log(a+b);
}
function subtract(a,b){
    console.log( a>=b?a-b:b-a);
}
function multiply(a,b){
    console.log( a*b);
}
function divide(a,b){
     console.log(a/b);
}

let num1,num2,oper;

function operate(){
    if (oper==='+') {
        console.log(add(num1,num2));
    }
    else if (oper==="-") {
        console.log(subtract(num1,num2));
    }
    else if (oper==="*") {
        console.log(multiply(num1,num2));
    }
    else if (oper==="/") {
        console.log(divide(num1,num2));
    }
}