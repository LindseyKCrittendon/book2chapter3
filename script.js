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

// function greeting(firstName, lastName){
//     return `Howdy ${firstName} ${lastName}`
   
// }
// console.log(greeting("lindsey", "clagg"))

// function displayGreeting(firstName, lastName){
//     console.log(`Hey, ${firstName}${lastName}`)
// }
// displayGreeting("Lindsey", "Clagg")

//Jordan's code from this morning
//Scope

// function sayHello(){
//     var greeting = "Hello"
// }
// console.log(greeting);

// if (2 + 2 === 3) {
//   let isTrustWorthy = true;
//   let secret;

//   if (isTrustWorthy === true) {
//     secret = "I've had way too much coffee this morning";
//     isTrustWorthy = false;
//   }
//   console.log("is it trustworthy?", isTrustWorthy);
//   console.log(secret);
// }

// console.log(secret)

// LIGHTNING EXERCISE 1
// Copy and paste the following code block into your file
let sentenceBeginning = "The symtoms of Covid-19 are"
const symtoms = ["cough", "fever", "exhaustion", "loss of sense of smell", "difficulty breathing"]
const mySymtoms = [];

// This loop will go through each symtom, concatenate it to our sentence, and push it into a new array of our own personal symtoms
for(let i = 0; i < symtoms.length; i++){
    sentenceBeginning += ` ${symtoms[i]}`
    mySymtoms.push(symtoms[i])
}
// console.log("this is sentence beginning", sentenceBeginning)
// console.log("my symtoms", mySymtoms)
// Using the new variable keywords we just learned, troubleshoot this code so that it runs without errors









//LIGHTNING EXERCISE 2
// Copy and paste the following code block into your file
// let taco;
function tacoTruck(shellType, toppings){
    taco = `A ${shellType} taco with ${toppings}`
}
// tacoTruck("crunchy", "chicken")
// console.log(taco)
// Using the new variable keywords we just learned, refactor this code so that we can log what type of taco we ordered outside of the function without error messages


// let shellType = "soft"
// let toppings = "beans and cheese"

// console.log(`A ${shellType} taco with ${toppings}`)


// shellType = "crunchy"
// toppings = "fish"


// Build a sentence about tacos
// Maker function
function buildTacoSentence(shellType, toppings){
    const tacoSentence = `A ${shellType} taco with ${toppings}`
    return tacoSentence;
}

const fishTacoSentence = buildTacoSentence("crunchy", "fish")
// console.log("this is from the first function", fishTacoSentence)


// Convert sentence to uppercase
// Maker function
function convertToScreaming(phrase){
    return `${phrase.toUpperCase()}!!!!!!!!!!!!!!!!!!!!`
}

const screamFishTaco = convertToScreaming(fishTacoSentence)
const screamingPatGreeting = convertToScreaming("hey pat")
// Print sentence to console
// Doer function
function printPhraseToConsole(phraseToPrint){
    console.log("this is from the third function", phraseToPrint)
}

// printPhraseToConsole(screamFishTaco);
printPhraseToConsole(screamingPatGreeting)

// function printTaco(shellType, toppings){
//     console.log(`A ${shellType} taco with ${toppings}`.toUpperCase())
// }

// printTaco("soft", "beans and cheese")
// printTaco("crunchy", "fish")
// printTaco("crunchy", "beef")

function greetAFriend(firstName, lastName){
    if(firstName === "Dwayne" && lastName === "The Rock Johnson"){
        return `HELLO THE ROCK`
    } else {
        return `Hello, ${firstName} ${lastName}`
    }

}

const greeting = greetAFriend("Barry", "Griffith")
const theRockGreeting = greetAFriend("Dwayne", "The Rock Johnson")
console.log(greeting)
console.log(theRockGreeting)

function calculateOrderTotal(orderArray){
    let sum = 0;

    for (let i = 0; i < orderArray.length; i++){
        sum += orderArray[i].price
        console.log(orderArray[i].price)
        console.log(sum)

    }
    return sum;
}
function printOrderTotal(orderTotal){
    document.querySelector("#order-total").innerHTML = orderTotal;
}

const currentOrder = [
    {
        name: "Latte",
        size: "M",
        price: 3.99
    },
    {
        name: "Americano",
        size: "S",
        price: 2.99
    }
]
const totalPriceForThisOrder = calculateOrderTotal(currentOrder);
console.log(totalPriceForThisOrder)
printOrderTotal(totalPriceForThisOrder)
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