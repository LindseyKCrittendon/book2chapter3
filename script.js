// Scope

// funtion sayHello(){
//     var greeting = "hello"
//     console.log(greeting);
// }
//console.log can look up, but it cannot look down.  Global scope is a variable outside of the function, and it can be changed easily.  It is vury vury scury.

// var isTrustworthy = true;
// if(isTrustworthy === true){
//     var secret = "I've had way too much coffee this morning."
// }
// console.log(secret);

//it works, because var doesn't keep secrets very well and can be easily changed later by mistake.

// const isTrustworthy = true;
// if(isTrustworthy === true){
//     const secret = "I've had way too much coffee this morning"
//     console.log(secret);
//     isTrustworthy = false;
// }
//const will not allow you to change it later ever, because const means it is constant.

//let is a little more change friendly.  You can change it, but you can't console.log it from a higher scope.  It can be reassigned, but it is a little more private.  cannot console.log it from outside of the curly braces when it is inside them.

//let has to be declared outside of the curly braces, but it does not have to be defined outside of the curly braces.

//// LIGHTNING EXERCISE 1
// Copy and paste the following code block into your file
let sentenceBeginning = "The symtoms of Covid-19 are"
const symtoms = ["cough", "fever", "exhaustion", "loss of sense of smell", "difficulty breathing"]
const mySymtoms = [];
// This loop will go through each symtom, concatenate it to our sentence, and push it into a new array of our own personal symtoms
for(let i = 0; i < symtoms.length; i++){
    sentenceBeginning += ` ${symtoms[i]}`
    mySymtoms.push(symtoms[i])
}
// Using the new variable keywords we just learned, troubleshoot this code so that it runs without errors


//LIGHTNING EXERCISE 2
// Copy and paste the following code block into your file
// let taco;
// function tacoTruck(shellType, toppings){
//      taco = `A ${shellType} taco with ${toppings}`
// }
// tacoTruck("crunchy", "chicken")
// console.log(taco)
// Using the new variable keywords we just learned, refactor this code so that we can log what type of taco we ordered outside of the function without error messages

//if you find yourself copy and pasting code, you should probably create a function.  Create dry code meaning you do not repeat yourself.

let shellType = "soft"
let toppings = "beans and cheese"

console.log(`A ${shellType} taco with ${toppings}`)

shellType = "crunchy"
toppings = "fish"
console.log(`A ${shellType} taco with ${toppings}`)

function printTaco(shellType, toppings){
    console.log(`A ${shellType} taco with ${toppings}`)
}

printTaco("soft", "beans and cheese")
printTaco("crunchy", "fish")

//functions should do one simple thing rather than several simple things.  Single responsibility statements.

// Write a function that accepts two parameters, first and last name. The function should return a greeting to that person using their full name. Then log the greeting to the console outside the function

function greeting(firstName, lastName){
    return `Howdy ${firstName} ${lastName}`
   
}
console.log(greeting("lindsey", "clagg"))

// Practice: ChickenMonkey
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 2 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }