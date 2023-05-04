const fs = require('fs');
const path = require('path');
const readline = require('node:readline');
const { stdin, stdout } = require('process');

const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

const rl = readline.createInterface({ input: stdin, output: stdout });

rl.question('\nHi! Type your text..\n\n', writeHandler);

rl.on('line', writeHandler);

process.on('exit', closingHandler);

function writeHandler(input) {
  if (input === 'exit') process.exit(0);
  else writeStream.write(input + '\n');
}

function closingHandler() {
  console.log('\nThe file with your text has been saved. Bye!');
  rl.close();
  writeStream.close();
}

// Обработка ошибок
writeStream.on('error', (error => console.error(error)));
rl.on('error', (error => console.error(error)));