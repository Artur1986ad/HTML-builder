const fs = require('fs');
const path = require('path');
const  currentPath = path.join(__dirname, 'secret-folder');

fs.readdir(currentPath, { withFileTypes: true }, (err, files) => {
  console.log('\n Current directory files:');
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      let nameFile = file.name.split('.')[0];
      let extFile = file.name.split('.')[1];
      fs.stat(path.join(currentPath,file.name), function(err,stats){
        console.log(`${nameFile} - ${extFile} - ${stats.size}`);
      });
    });
  }
});
