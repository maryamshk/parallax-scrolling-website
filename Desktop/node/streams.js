const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf8'});   //to make it in readable form
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', chunk => {    //on is evenlistener
//   console.log('---- NEW CHUNK ----');
//   console.log(chunk);
//   writeStream.write('\nNEW CHUNK:\n');
//   writeStream.write(chunk);
// });

// piping   
//same as above
readStream.pipe(writeStream);