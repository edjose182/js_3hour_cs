// Boolean values
function welcomeToBooleans() {
    return false;//true;
}

// Use Conditional Logic with If Statements
// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));

// Comparison with the Equality Operator
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
console.log(testEqual(10));

// Comparison with the Scrict Equality Operator
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// == use a convert funtion to make the comparation
// === doen't use the convertion function 
/*
3 === 3 => True
3 === '3' => False
 */

// Change this value to test
console.log(testStrict(10));

// Practice Comparing Different Values
// Setup
function compareEquallity(a,b) {
    if(a == b){ // Change this line
        return "Equal";
    }
    return "Not Equal"
}

// Change this value to test
console.log(compareEquallity(10,"10"));

// Comparison with the Inequality Operator
// Setup
function testNotEqual(val) {
    if (val!=22) { //Change this line FYI != type convertion
        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
console.log(testNotEqual(10));

// Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line
    if (val !== 22) {
        // Only Change Code Above this Line
        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
console.log(testStrictNotEqual(10));

// Comparison with the Logical AND Operator -> 1:17:08
