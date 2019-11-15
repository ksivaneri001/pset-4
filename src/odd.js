const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
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

let sum = 0;
const LENGTH = String(positiveInteger).length;

for (let i = 0; i < LENGTH; i++) {
    
}
