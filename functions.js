// Write Reusable Code with Functions
function ourReusableFunction() {
    console.log("Heyya, World");
}
ourReusableFunction();

// Only change code below this line.

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

// Passing Values to Functions with Arguments
// Example
function ourFunctionWithArgs(a,b) {
    console.log(a - b);
}
ourFunctionWithArgs(10,5); // Output 5

// Only change code belos this line

function functionWithArgs(a,b) {
    console.log(a+b);
}

functionWithArgs(10,5); //55:33

// Global Scope and Functions

// Declare your variable here
var myGlobal = 10;
function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 22; // This type of assigment should work as global variable
                     // Scrimba doesn't reconize this
}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined" ) {
        output += "myGlobal: " + myGlobal
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
        
    }
    console.log(output);
}

fun1();
fun2();

// Local Scope and Functions
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

console.log(myVar); // myVar is undefined because is aoutside of the function

// Global vs Local Scope in Functions
var outerWear = "T-Shirt";

function myOutfit() {
    //var outerWear = "sweater"; If uncommented will print T-shirt
    return outerWear;
}
console.log(myOutfit());

// Return a Value from a Function with Return
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5
}

console.log(timesFive(5));

// Understanding Undefined Value Returned from a Function
// Example
var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
}

// Assignment with a Returned Value
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = changed(10);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

// Stand in Line
function nextInLine(arr,item){
    // Your code here
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));