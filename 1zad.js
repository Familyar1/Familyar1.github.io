function areEqual(num1, num2) {
    return num1 === num2;
}

function findMin(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(areEqual(5, 5)); // true
console.log(areEqual(5, '5')); // false
console.log(areEqual(10, 20)); // false