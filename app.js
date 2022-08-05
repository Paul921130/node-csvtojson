// require csvtojson module
const CSVToJSON = require('csvtojson');
const fs = require('fs');
const filename='sample';
// convert users.csv file to JSON array
CSVToJSON().fromFile('csv/'+filename+'.csv')
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