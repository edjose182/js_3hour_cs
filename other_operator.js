// Use the Condtional (Ternary) Operator 
// condition ? statement-if_true : statement-if-false;
// 2:34:41
function checkEqual(a,b) {
    return a === b ? true : false;
}

checkEqual(1,2);

//Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));