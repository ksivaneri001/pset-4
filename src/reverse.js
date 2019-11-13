const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;
let endLoop = false;
let positiveInteger = null;

console.log();

while (endLoop === false) {
    positiveInteger = Number(readlineSync.question("Positive Integer: "));

    if (Number.isNaN(positiveInteger)) {
    }
    else if (positiveInteger == "") {
    }
    else if (positiveInteger % 1 !== 0) {
    }
    else if (positiveInteger < MIN || positiveInteger > MAX) {
    }
    else {
        endLoop = true;
    }
}

const LENGTH = Math.ceil(Math.log10(positiveInteger + 1));
let testVariable = null;
let divisor = 10;

for (let i = 0; i < LENGTH; i++) {

}

testVariable = positiveInteger - (Math.floor(positiveInteger / divisor) * 10);
positiveInteger = Math.floor(positiveInteger / divisor) * 10;

console.log(positiveInteger);
positiveInteger /= 10;

console.log(testVariable);
console.log(positiveInteger);
