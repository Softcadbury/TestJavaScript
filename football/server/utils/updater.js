'use strict';

var Converter = require('csvtojson').Converter;
var converter = new Converter({ constructResult: false });

// Updates a file with data from an url
function updateData(url, fileDestination) {
    var result = [];

    converter.on('record_parsed', (jsonObj) => {
        result.push(jsonObj);
    });

    converter.on('end_parsed', () => {
        var fs = require('fs');
        fs.writeFile('./data/' + fileDestination + '.json', JSON.stringify(result), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('File updated');
            }
        });
    });

    require('request').get(url).pipe(converter);
}

module.exports = {
    updateData: updateData
};