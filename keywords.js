// 2:37:10
// Differences Between the var and let Keywords
// "let" don't allow to declared a varaible twice
let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

    return quoute;
}

console.log(catTalk());

// Compare Scopes of the var and let Keywords

// var case
function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ",i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

// This function will return Block scope in both cases

// set case
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ",i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

// This function will return Block scope and Function scope

checkScope();

// Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";

    //sentence = str + " is amazing!";

    for (let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}

printManyTimes("freeCodeCamp");

// Mutate an Array Declared with const
const S = [5,7,2];
function editInplace() {
    "use strict";

    //S = [2,5,7];
    S[0] = 2;
    S[1] = 5;
    S[2] = 7;

    return S;
}

console.log(editInplace());

// Prevent Object Mutation -> 2:44:52
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS ={
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

// Use Arrow Functions to Write Concise Anonymous Functions  -> 2:47:17
var magic = function () { //Anonymous Function
    return new Date();
};

//Equivalent
var magic = () => {
    return new Date();
};

//Equivalent

const magic = () => new Date(); // In case I don't need tu return something

// Write Arrow Functions with Parameters
var myConcat = function (arr1,arr2) {
    return arr1.concat(arr2);
};

//Equivalent
const myConcat = (arr1,arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));

// Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Write Higher Order Arrow Functions -> 2:53:06
const increment = (function() {
    return function increment(number,value = 1){ // value = 1 is a default value
        return number + value;
    };
})();
console.log(increment(5,2)); // = 7
console.log(increment(5)); // = 6

// Use the Rest Operator with Function Parameters
const sum = (function () {
    return function sum(...args){ // previous: return function sum(...args)
        //previous: const args = [x,y,z];
        // With this changes now I can several arguments
        return args.reduce((a,b) => a + b, 0);
    };
    
})();
console.log(sum(1,2,3));

// Use the Spread Operator to Evalute Arrays In-Place -> 2:55:31 ***Check this case
const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function () {
    arr2 = [...arr1]; // change this line
    arr1[0] = 'potato'
})();
console.log(arr2);

// Use Destructuring Assignment to Assign Variables from Objects
var voxel = {x:3.6, y:7.4, z:6.54};

// Old way
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

//Using Destructuring
const { x : a, y : b, z : c} = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    //const tempOfTomorrow = undefined; //change this line
    const{ tomorrow: tempOfTomorrow} = avgTemperatures; // Using Destrucring
    // change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); //should be 79

// Destructuring Assignment with Nested Objects -> 3:00:18
const LOCAL_FORECAST = {
    today : {min: 72, max: 83},
    tomorrow: {min: 73.3, max:84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const {tomorrow: {max: getMaxOfTomorrow}} = forecast;

    return getMaxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Use Destructuring Assignment to Assign Variables from Arrays -> 3:01:55
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let a = 8, b= 6;

(() =>{
    "use strict";
    [a, b] = [b ,a]

})();
console.log(a);
console.log(b);

// Use Destructing Assignment with the Rest Operator -> 3:03:40
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

    const [ , , ...arr] = list;

    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    //return function half(stats){
        //return (stats.max + stats.min)/2.0;
    return function half({max,min}){
        return (max + min)/2.0;
    };
})();
console.log(stats);
console.log(half(stats)); //-> 3:06:14




