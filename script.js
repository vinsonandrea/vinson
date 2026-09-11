console.log("Hello, World!");




const myName = "Andrea Ammell vinson";
let age = 20;
const number = "638271709";
const address = "Brgy.1o, Victorias City, Negros Occidental";



console.log (`Name: ${myName}`);
console.log (`Age: ${age}`);
console.log (`Number: ${number}`);
console.log (`Address: ${address}`);


function greet(name) {
    return `Good morning, ${name}`;
}

console.log(greet(myName));


function add (a,b) {
    return a + b;
}
function mdas (a,b) {
    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let quotient = a / b;

    return {
        sum: sum/2,
        difference: difference/2,
        product: product/2,
        quotient: quotient/2
    };

} 
console.log(mdas(5,3));