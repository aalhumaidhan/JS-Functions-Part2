//Function 1: It takes an input number n and returns a boolean statements that determines if it's odd or not
function isOdd(n) {
    if (n % 2 === 0) {
        return false;
    }
    else {
        return true;
    }
}

console.log(isOdd(1));
console.log(isOdd(4));

//Function 2: It takes an input number n and counts the odd numbers that are smaller than n
function oddsSmallerThan(n) {
    if (isOdd(n)) {
        return (n - 1)/2;
    }
    else {
        return n/2;
    }
}

let result = oddsSmallerThan(11);
console.log(`${result}`);

//Function 3: 
function squareOrDouble(n) {
    if (isOdd(n)) {
        return n*n;
    }
    else {
        return n*2;
    }
}

let res = squareOrDouble(9);
console.log(`${res}`);