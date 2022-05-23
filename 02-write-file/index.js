const fs = require('fs');
const fp = require('path');
const { stdout,stdin } = require('process');
const currentFile = fs.createWriteStream(fp.join(__dirname, 'main.txt'));
process.stdout.write('Write text here. \n');
process.stdin.on('data', data => {
    if(data.toString().trim() === 'exit'){
        process.exit();
    }else{
        currentFile.write(data.toString());
    }
});
stdin.on('SIGNINT', ()=>process.exit());
stdin.on('exit', ()=>stdout.write('the document was written.'));
stdin.on('error', error => console.error(error));
