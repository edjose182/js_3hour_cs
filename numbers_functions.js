// Generate Random Fractions
//2:28:18
function randomFraction() {
    return Math.random();
}

console.log(randomFraction());

//Generate Random Whole Numbers
var randomNumberBetween0and19 = Math.floor(Math.random()*20);

function randomWholeNum() {
    return Math.floor(Math.random()*100); //Random generates a fraction number
}

console.log(randomWholeNum());

// Generate Random Whole Numbers within a Range
// Example
function ourRandomRange(ourMin,ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin +1)) + ourMin;
}

ourRandomRange(1,9);

// Only change code below this line

function randomRange(myMin,myMax) {
    return Math.floor(Math.random()*(myMax - myMin +1)) + myMin;
}

var myRandom = randomRange(5,15);
console.log(myRandom);

//Use the parseInt Function
function covertToInteger(str) {
    return parseInt(str);
}

covertToInteger("56");

//Use the parseInt Function with a Radix
function convertToInteger(str) {
    return parseInt(str,2);
}

convertToInteger("10011");