const request = require('request');
const fs = require('fs');

const command = process.argv.slice(2);
const domain = command[0];
const path = command[1];


request(domain, (error, response, body) => {
  if(error) {
    console.log('error:', error);
  }
  fs.writeFile(`${path}`, body, (err) => { // copies the path file onto our computer
    if (err) throw err;
    
    fs.stat(path, (err, fileStats) => {  //once it's on our computer fetches information about the file
      if (err) {
        console.log(err)
      } else {
        console.log(`Downloaded and saved ${fileStats.size} bytes to ${path}`) //since fileStats is an object..we can access the size by doing .size
      }
    }) 
  });
});



