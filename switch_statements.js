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