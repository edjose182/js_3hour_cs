/***** 
CODE OUTPUT
\'   single quote
\"   double quote
\\   backslash
\n   newline
\r   carriage return
\t   tab
\b   backspace
\f   form feed
*****/

// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line

var myFirstName = "Trafalgar";
var myLastName = "Law";

// Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";

// Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank"<Link</a>';

// Escape Sequences in Strings
var myStr;
mStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating Strings with Plus Operator
// Example 
var ourStr = "I come first. " + "I come second.";

// Only change code below this line
var myStr = "This is the start. " + "This is the end."

// Concatenating Strings with Plus Equals Operators
// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

// Constructing Strings with Variables
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName = "Trafalgar";
var myStr = "My name is " + myName + " and I am well!";

//Appending Variables to Strings
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;

//Find Length of String
// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLenght = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLenght = lastName.length;
console.log(lastNameLenght);

//Bracket Notation to Find First Character in String
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfFirstName);

// String Immutability
// String can't be altered once they are created

// Set up
var myStr = "Jello World!";

// Only change code below this line

myStr[0] = "H"; // Fix me -> This will not work

myStr = "Hello World!"; // This is the correct form

// Bracket Notation to Find Nth Character in String
// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

//Bracket Notation to Find Last Character in String
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

//Bracket Notation to Find Nth-to-Last Character in String
// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length -3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

    // Your code above this lone
    return result;
}

// Change the words here to test your function
console.log(wordBlanks("dog","big","ran","quickly"));
console.log(wordBlanks("Madao","lazy","ran","slowly"));