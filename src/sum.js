const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let endLoop = false;
let lowerBound = null;
let upperBound = null;

console.log("");

while (endLoop === false) {
    lowerBound = Number(readlineSync.question("Lower bound: "));
    upperBound = Number(readlineSync.question("Upper bound: "));

    if (Number.isNaN(lowerBound) || Number.isNaN(upperBound)) {

    }
    else if (lowerBound < MIN || lowerBound > MAX || upperBound < MIN || upperBound > MAX) {

    }
    else if (lowerBound >= upperBound) {

    }
    else {
        endLoop = true;
    }
}

let lowerEvenBound = null;
let upperEvenBound = null;

if (lowerBound % 2 == 0) {
    lowerEvenBound = lowerBound;
}
else {
    lowerEvenBound = lowerBound++
}
if (upperBound % 2 == 0) {
    upperEvenBound = upperBound;
}
else {
    upperEvenBound = upperBound++
}

const NUMBER_OF_EVENS = (upperEvenBound - lowerEvenBound) + 1;

const SUM = (NUMBER_OF_EVENS / 2) * ((2 * lowerEvenBound) + (NUMBER_OF_EVENS - 1) * 2);
