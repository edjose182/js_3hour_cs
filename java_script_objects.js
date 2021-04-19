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

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    // Add record here
    {
        "artist": "Beau Crnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube Video"
        ],
        "gold": true
    }
];

// Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box":"maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};

var globeBoxContents = myStorage.car.inside["glove box"]; // Change this line

console.log(globeBoxContents);

// Accessing Nested Arrays

// Setup
var myPlants = [
    {                    //INDEX 0
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },

    {                   //INDEX 1
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line
var secondTree = myPlants[1].list[1]; // Change this line

console.log(secondTree);

// Record Collection
//Setup

var collection = {
    "2548":{
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468":{
        "album":"1999",
        "artist":"Prince",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist": "Red Hot Chilli Peppers",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Conly change code below this line
function updateRecords(id,prop,value) { //prop = album, //value = track 
    if(collection.hasOwnProperty(id)){
        if(collection[id].hasOwnProperty(prop)){
            console.log("This album already exist")

            // Adding track
            if(collection[id].hasOwnProperty("tracks")){
                collection[id].tracks.push(value);
            }

            else {
                collection[id].tracks = [];
                collection[id].tracks.push(value);
            }

        }

        else {
            // Adding album
            collection[id].album = prop;

            // Adding track
            if(collection[id].hasOwnProperty("tracks")){
                collection[id].tracks.push(value);
            }

            else {
                collection[id].tracks = [];
                collection[id].tracks.push(value);
            }
        }
    }

    else{
        console.log("This item doesn't exist")
    }


    return collection;
}

console.log(updateRecords("2548","Slippery When Wet","Living on a Prayer"))