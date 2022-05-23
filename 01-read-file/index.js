const fs = require('fs');
const fp = require('path');
const readStream = fs.createReadStream(fp.join(__dirname,'text.txt'));
readStream.on('data', data => console.log(data.toString()));