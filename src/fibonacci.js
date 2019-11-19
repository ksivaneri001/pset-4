const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

let endLoop = false;
let num;

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

let fib = 0;

for (i = 1; i <= num; i++) {
    fib = fib + (i - 1) + (i - 2);
}

console.log("\n" + fib + ".");
