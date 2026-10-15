// ==========================================
// SECTION 1 — PRACTICAL (JAVASCRIPT FUNCTIONS)
// ==========================================

// --- Question 1: Rectangle Area ---
function getRectangleArea(length, breadth) {
    return length * breadth;
}
console.log("Q1 Area:", getRectangleArea(5, 10)); // 50


// --- Question 2: Business Profit Check ---
function checkProfit(revenue, expenses) {
    if (revenue > expenses) {
        return "The business is profitable.";
    } else if (revenue < expenses) {
        return "The business is operating at a loss.";
    } else {
        return "The business is breaking even.";
    }
}
console.log("Q2 Profit Check:", checkProfit(5000, 3000));


// --- Question 3: Character Checker ---
function checkCharacter(char) {
    if (char.length !== 1) {
        return "Please provide a single character.";
    }
    if (char >= 'A' && char <= 'Z') {
        return "Capital letter";
    } else if (char >= 'a' && char <= 'z') {
        return "Small letter";
    } else {
        return "Not a letter";
    }
}
console.log("Q3 Char Check ('A'):", checkCharacter('A'));
console.log("Q3 Char Check ('g'):", checkCharacter('g'));
console.log("Q3 Char Check ('#'):", checkCharacter('#'));


// --- Question 4: Number or String ---
function checkNumberOrString(value) {
    if (typeof value === "number") {
        return "It is a number";
    } else if (typeof value === "string") {
        return "It is a string";
    } else {
        return "It is neither a number nor a string";
    }
}
console.log("Q4 Value Check (123):", checkNumberOrString(123));
console.log("Q4 Value Check ('Hello'):", checkNumberOrString("Hello"));


// --- Question 5: Prime Number ---
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("Q5 Prime Check (7):", isPrime(7));     // true
console.log("Q5 Prime Check (10):", isPrime(10));   // false


// --- Question 6: Type Finder ---
function findType(value) {
    return typeof value;
}
console.log("Q6 Type Finder (true):", findType(true)); // boolean


// --- Question 7: Triangle Area ---
function getTriangleArea(base, height) {
    return 0.5 * base * height;
}
console.log("Q7 Triangle Area:", getTriangleArea(10, 5)); // 25


// --- Question 8: Greater Number ---
function printGreaterNumber(num1, num2) {
    if (num1 > num2) {
        console.log(`Q8: ${num1} is greater than ${num2}`);
    } else if (num2 > num1) {
        console.log(`Q8: ${num2} is greater than ${num1}`);
    } else {
        console.log("Q8: Both numbers are equal");
    }
}
printGreaterNumber(15, 25);


// --- Question 9: Function Name ---
function showFunctionName() {
    console.log("Q9 Function Name:", showFunctionName.name);
}
showFunctionName();


// --- Question 10: Arrow Function (greetUser) ---
const greetUser = (name = "Guest") => {
    return `Hello, ${name}!`;
};
console.log("Q10:", greetUser("Sindhura")); // "Hello, Sindhura!"
console.log("Q10:", greetUser());          // "Hello, Guest!"


// --- Question 11: Convert to Arrow Function ---
const isEven = (num) => num % 2 === 0;
console.log("Q11 isEven(4):", isEven(4)); // true


// --- Question 12: Callback Function ---
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

function performOperation(a, b, operation) {
    return operation(a, b);
}

console.log("Q12 Add:", performOperation(5, 3, add));         // 8
console.log("Q12 Subtract:", performOperation(5, 3, subtract)); // 2
console.log("Q12 Multiply:", performOperation(5, 3, multiply)); // 15