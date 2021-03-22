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
function testGreaterThan(val) {
    if (val > 100) { // Change this line
        return "Over 100";
    }

    if (val > 10) { // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

// Change this value to test
console.log(testGreaterThan(10));

// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val >= 20) { // Change this line
        return "20 or Over";
    }

    if (val >= 10) { // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

// Change this value to test
console.log(testGreaterOrEqual(10));

// Comparison with the Less Than Operator
function testLessThan(val) {
    if (val < 25) { // Change this line
        return "Under 25";
    }

    if (val < 55) { // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

// Change this value to test
console.log(testLessThan(10));

// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val <= 12) { // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24)  { // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

// Change this value to test
console.log(testLessOrEqual(10));

// Comparions with the Logical AND Operator
function testLogicalAND(val) {
    // Only change code below this line

    /* if (val <= 50) {
        if (val >= 25) {
            return "Yes";
        }
    }*/

    // Different way to write the commented code above:
    if ((val <=50) && (val >= 25)) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

// Change this value to test
testLogicalAND(10);

// Comparisons with the Logical OR Operator
function testLogicalOR(val) {
    /*if (val < 10) {
        return "Outside";
    }

    if (val > 20) {
        return "Outside";
    }*/

    // Different way to write the commented code above:

    if ((val < 10) || (val > 20)) {
        return "Outside";
    }

    return "Inside";
}

// Else Statements
function testElse(val) {
    var result = "";
    // Only change code below this line
    if (val >5 ) {
        result = "Bigger than 5";
    }

    else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

// Else If Statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    else if (val < 5) {
        return "Smaller than 5";
    }

    else{
        return "Between 5 and 10";
    }
}

// Change this value to test
console.log(testElseIf(7));

// Logical Order in If Else Statements
function orderMylogic(val) {
    /*if (val < 10) {
        return "Less than 10";
    }
    
    else if (val < 5) {
        return "Less than 5";
    }*/

    if (val < 5) {
        return "Less than 5";
    }
    
    else if (val < 10) {
        return "Less than 10";
    }

    else{
        return "Greater than or equal to 10";
    }
}

// Change this value to test
console.log(orderMylogic(7));

// Chaining If Else Statements
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }

    else if (num < 10) {
        return "Small";
    }

    else if (num < 15) {
        return "Medium";
    }

    else if (num < 20) {
        return "Large";
    }

    else {
        return "Huge"
    }
}

console.log(testSize(7));

/*
Write chained if/else ii statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 -return "Huge"
*/
