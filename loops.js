// Iterate with While Loops
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

// Iterate with For Loops

// Example

var ourArray = [];

for (let i = 0; i < 5; i++) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line

for (let i = 1; i == 4; i++) {
    myArray.push(i);
}

console.log(myArray);

// Iterate Odd Numbers with a For Loop
// Example
var ourArray = [];

for (let i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

console.log(ourArray);

// Setup
var myArray = [];

// Only change code below this line

for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);

// Count Backwards with a For Loop
// Example
var ourArray = [];

for (let i = 10; i > 0 ; i -=2) {
    ourArray.push(i);
}

console.log(ourArray);

// Setup
var myArray = [];

// Only change code below this line

for (let i = 9; i > 0 ; i -=2) {
    myArray.push(i);
}

console.log(myArray);

// Iterate Through an Array with a For Loop
// Example
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (let i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);

// Setup
var myArr = [2, 3, 4, 5, 6];
var total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);

// Nesting For Loops

function multiplyAll(arr) {
    var product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
        
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);

// Iterate with Do... While Loops


// Setup
var myArray = [];
var i= 10;

// Only change code below this line.

// // Common while
while (i<5) {
    myArray.push(i);
    i++;
}

console.log(i,myArray);

// // Do while

do {
    myArray.push(i);
    i++;
} while (i<5)

console.log(i,myArray);

