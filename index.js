const fs = require('fs')

const input = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(input)

const output = `This is what we know about avocados: ${input}\n Created ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', output);
console.log('File written.')