const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

let height;

console.log();

do {
    height = Number(readlineSync.question("Positive Integer: "));
} while (Number.isNaN(height) || height % 1 !== 0 || height < MIN || height > MAX);

console.log();
