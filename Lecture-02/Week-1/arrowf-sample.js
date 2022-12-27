//Arrow function with two arguments
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
};
console.log(sum(2, 5)); // Prints : 7

//Arrow function with no arguments
const printHello = () => {
    console.log("hello");
};
printHello(); // Prints : hello

// Arrow funtions with a single argument
const checkWeight = (weight) => {
    console.log(`Baggae weight : ${weight} kilograms.`);
};
checkWeight(25); // Prints : Baggage weight : 25 kilograms.

// Concise arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // Pronts : 60