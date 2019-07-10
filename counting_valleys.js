// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.
//
// countingValleys has the following parameter(s):
//
// n: the number of steps Gary takes
// s: a string describing his path
// Input Format
//
// The first line contains an integer , the number of steps in Gary's hike.
// The second line contains a single string , of  characters that describe his path.
//
// Constraints
//
// Output Format
//
// Print a single integer that denotes the number of valleys Gary walked through during his hike.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let altitude = 0;
    let count = 0;

    for (var i = 0; i < n; i++) {
        if (s.charAt(i) === "D" && altitude == 0) {
            count++;
            altitude--;
        } else if (s.charAt(i) === "D" && altitude !== 0) {
            altitude--;
        } else if (s.charAt(i) === "U") {
            altitude++;
        }
    }
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
