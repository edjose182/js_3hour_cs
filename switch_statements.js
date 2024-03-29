// Switch Statements
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;

        case 2:
            answer = "beta";
            break;

        case 3:
            answer = "gamma";
            break;

        case 4: 
            answer = "delta";
            break;
    }
    
    return answer;
}

// Change this value to test
console.log(caseInSwitch(1));
/*
Write a switch statement tests val and sets for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/

// Default Option in Switch Statements
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;

        case "b":
            answer = "bird"
            break;

        case "c":
            answer = "cat";
            break;
    
        default:
            answer = "madao";
            break;
    }

    return answer;
}

console.log(switchOfStuff("k"));

// 1:36:24

// Multiple Identical Options in Switch Statements
function sequentialSizes(val){
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "default";
            break;
    }

    return answer;
}

// Change this value to test
console.log(sequentialSizes(1));

// Replacing If Else Chains with Switch
function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        default:
            answer = "Madao";
            break;
    }
    return answer;
}

console.log(chainToSwitch("bob"));
