// Example
var ourDog = { // Object -> ourDog
    "name": "Camper", // Property name
    "legs": 4, // Property legs
    "tails": 1, // Property tails
    "friends": ["everything!"] // Property friends
};

console.log(ourDog);

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

// Accessing Object Properties with Dot Notation
// Setup
var testObj ={
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// Accessing Object Properties with Bracket Notation
// Setup
var testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// Acessing Object Properties with Variables
// Setup
var testObj3 = {
    12: "Namath",
    16: "Monatana",
    19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;
var player = testObj3[playerNumber];


// Updating Object Properties -> 1:53:35
// Example
var ourDog2 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog2.name = "Happy Camper";

// Setup
var myDog2 = {
    "name": "Coder",
    "legs" :4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog2.name = "Happy Coder";

// Add New Properties to an Object
// Example
var ourDog3 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog3.bark = "bow-wow";

// Setup

var myDog3 = {
    "name": "Coder",
    "legs" :4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code blow this line.

myDog3['bark'] = "woof!"

// Delete Properties From an Object
var ourDog4 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog4.bark;

// Setup
var myDog4 = {
    "name": "Happy Coder",
    "legs" :4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof!"
};

// Only change code below this line

delete myDog4.tails;

// Using Objects for Lookups
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line

    var phonetic = {
        "alpha": "Adam",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Franky"
    }
    result = phonetic[val];

    return result;
};
    
console.log(phoneticLookup("charlie"));

// Testing Objects for Properties
// Setup
var myObj = {
    "gift":"pony",
    "pet":"kitten",
    "bed":"sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }

    else {
        return "Not Found";
    }
    
};

// Test your code by modifying these values
console.log(checkObj("gift"));

// Manipulating Complex Objects -> 1:59:15