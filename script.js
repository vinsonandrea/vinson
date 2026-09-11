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
function mdas (num1,num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let s = num1 - num2;
    return (`values: ${num1} and ${num2},\n product: ${m}, \n quotient: ${d}, \n sum: ${a}, \n difference: ${s}`);

    }
   console.log (mdas(5,3)); 




  // Query Selector
const heading = document.querySelector("h1");
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectsHeading = document.querySelector("#projects h2");
console.log(projectsHeading);
const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading);

//text Content
heading.textContent = "My Portfolio";
contactHeading.textContent = "lets connect";
projectsHeading.textContent = "My Projects";
servicesHeading.textContent = "My Services";

//.style
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
contactHeading.style.color = "purple";
projectsHeading.style.color = "purple";
servicesHeading.style.color = "purple";


