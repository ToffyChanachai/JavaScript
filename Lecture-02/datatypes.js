const people = ["Aaron", "Mel", "John"];
const one = 1;
const str = "Hello World";
const b = true;
const employeee = {
    firstName: "Anirach",
    lastName: "Mingkhawn",
};

function sayHello(person) {
    console.log("Hello" + person.firstName);
}

console.log(typeof people);
console.log(typeof sayHello)
console.log(employeee instanceof Array);
sayHello(employeee);