// Store Multiple Values with Arrays
// Elements in an array are separate by commas
// Any kind of element could be inside of an array
// Example
var ourArray = ["John", 23];
// Only change code below this line.
var myArray = ["Quincy",1];

// Nested Arrays
// Example
var ourArray = [["the universe",42],["everything",101010]];

// Only change code below this line.
var myArray = [["Bulls",23],["White Sox",10]];

// Access Array Data with Indexes
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.
var myData = myArray[0];
console.log(myData);

// Modify Array Data With Indexes
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line.
myArray[0] = 45;
console.log(myArray);

// Access Multi-Dimensional Arrays With Indexes
// Setup
var myArray = [[1,2,3],[4,5,6],[7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[3][0][1];

console.log(myData);

// Manipulate Arrays with push()
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy","joy"]);
// ourArray now equals ["Stimpson","J","cat",["happy","joy"]]

// Setup
var myArray = [["John",23],["cat",2]];

// Only change code below this line.
myArray.push(["dog",3]);

// Manipulate Arrays with pop()
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John",23],["cat",2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();
console.log(myArray);

// Manipulate Arrays with shift()
// Example
var ourArray = ["Stimpson","J",["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J",["cat"]]

// Setup
var myArray = [["John",23],["dog",3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift(); // -> 48:37
console.log(myArray);

// Manipulate Arrays with unshift()
// Example
var ourArray = ["Stimpson","J","cat"];
ourArray.shift(); // ourArray now equals ["J","cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy","J","cat"]

// Setup
var myArray = [["John",23],["dog",3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul",35]);

// Shopping List
var myList = [["cereal",3],["milk",2],["bananas",3],["juice",2],["eggs",12]];
