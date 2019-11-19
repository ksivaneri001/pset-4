const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let endLoop = false;
let num = null;

console.log();

while (endLoop === false) {
    num = Number(readlineSync.question("Positive Integer: "));

    if (Number.isNaN(num)) {
    }
    else if (num == "") {
    }
    else if (num % 1 !== 0) {
    }
    else if (num < MIN || num > MAX) {
    }
    else {
        endLoop = true;
    }
}

let primeNumber = "Prime";

if (num === 1) {
    primeNumber = "Not Prime";
}

for (i = 2; i < num; i++) {
    if (num % i == 0) {
        primeNumber = "Not Prime";
        break;
    }
}

console.log("\n" + primeNumber + ".");
