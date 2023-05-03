const fs = require('fs');
const path = require('path');
const reader = fs.createReadStream(path.join(__dirname, 'text.txt'));
reader.on('data', (chunk) => console.log(chunk.toString()));

// Обработка ошибок
reader.on('error', (error) => console.error(error));