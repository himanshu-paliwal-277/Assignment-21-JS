// Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function. The inner function should access both the parameter of outerFunction and a variable declared within outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these variables even after outerFunction has finished executing.

function outerFunction(outerFunctionParameter) {
    const outerFunctionVariable = 10;
    return function innerFunction() {
        console.log("Outer Function parameter value = ", outerFunctionParameter);
        console.log("Outer Function variable value = ", outerFunctionVariable);
    }
}

const myFunction = outerFunction(29);
// The inner function still access to outer Function Parameter and outer Function variable
myFunction()