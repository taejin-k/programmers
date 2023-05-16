const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let arr = Array.from({length: Number(input[0])}, (value, index) => index + 1);
    arr.forEach(item => console.log('*'.repeat(item)))
});