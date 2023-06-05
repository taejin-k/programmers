const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    for (let i=0; i<input[0].split('').length; i++) {
        console.log(input[0].split('')[i])
    }
});