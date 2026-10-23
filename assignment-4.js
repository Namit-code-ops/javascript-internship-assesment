
console.log("1. Multiplication Table of 5");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n2. First number greater than 10 divisible by 6");

let number = 11;

while (number <= 100) {
    if (number % 6 === 0) {
        console.log(`Found: ${number}`);
        break;
    }
    number++;
}

console.log("\n3. do...while with continue");

let count = 0;

do {
    count++;

    if (count === 3 || count === 5) {
        continue;
    }

    console.log(`Count: ${count}`);
} while (count < 7);
