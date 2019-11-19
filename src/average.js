const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let endLoop = false;
let num = null;
let sum = 0;
let totalNumbers = 0;

console.log();

while (endLoop === false) {
    num = Number(readlineSync.question("Non-negative Integer: "));

    if (Number.isNaN(num) || num == "" || num % 1 !== 0 || num > MAX) {
    }
    else if (num < MIN) {
        endLoop = true;
    }
    else {
        sum = sum + num;
        totalNumbers++;
    }
}

let average = (sum / totalNumbers).toLocaleString("en", {minimumFractionDigits:3, maximumFractionDigits:3});
console.log("\n" + average + ".");
