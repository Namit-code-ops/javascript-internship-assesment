
console.log("1. Regular Function");

function calculateRectangleArea(length, width = 5) {
    return length * width;
}

console.log("Area:", calculateRectangleArea(10, 4));
console.log("Area with default width:", calculateRectangleArea(10));


console.log("\n2. Arrow Function");

const calculateArea = (length, width = 5) => length * width;

console.log("Arrow function area:", calculateArea(6, 3));
console.log("Arrow function with default width:", calculateArea(8));


console.log("\n3. Function Scope");

function showMessage() {
    let message = "Inside the function";
    console.log(message);
}

showMessage();


console.log("\n4. Block Scope");

if (true) {
    let blockVar = "I exist inside this block";
    console.log(blockVar);
}

try {
    console.log(blockVar);
} catch (error) {
    console.log("ReferenceError: blockVar is not defined outside the block");
}
