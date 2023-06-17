const fs = require('fs');    //fs=file system


// ----------------reading files--------------------
// fs.readFile('./docs/blog1.txt', (err, data) => {    //1st argument: path of file we want to read--------  2nd arg:func
//   if (err) {
//     console.log(err);
//   }  
//   console.log(data.toString());        //if dont use to string it will give in buffer
   
// });

// console.log('last line');




// -------------------writing files------------------
// fs.writeFile('./docs/blog.txt', 'hello, world', () => {
//   console.log('file was written');
// });

// fs.writeFile('./docs/blog1.txt', 'hello, again', () => {
//   console.log('file was written');
// });





// ---------------------directories------------------
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder created');
//   });
// } else {
//   fs.rmdir('./assets', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder deleted');
//   });
// }


//---------------- deleting files---------------------------
// if (fs.existsSync('./docs/deleteme.txt')) {
//   fs.unlink('./docs/deleteme.txt', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('file deleted');
//   });
// }