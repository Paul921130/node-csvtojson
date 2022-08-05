// require csvtojson module
const CSVToJSON = require('csvtojson');
const fs = require('fs');
const path = require('path')

const csvFolder = __dirname+'/csv/';
fs.readdirSync(csvFolder).forEach(csvfile => {
  let extension = path.extname(csvfile);
  console.log('extension',extension)
  let filename = path.basename(csvfile, extension);
  if(extension!=='.csv'){
    return
  }
  CSVToJSON().fromFile('csv/'+csvfile)
  .then(file => {
      // users is a JSON array
      // write JSON array to file
       fs.writeFile('json/'+filename+'.json', JSON.stringify(file, null, 4), (err) => {
          if (err) {
             throw err;
           }
        });
  }).catch(err => {
      // log error if any
      console.log(err);
  });
});