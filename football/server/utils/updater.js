'use strict';

var Converter = require('csvtojson').Converter;
var footballDataUrl = 'http://www.football-data.co.uk/mmz4281/{0}/{1}.csv';
var countries = ['England', 'France', 'Germany', 'Italy', 'Spain'];
var countryCodes = ['E0', 'F1', 'D1', 'I1', 'SP1'];
var currentYear = '2015-2016';
var oldYears = ['2000-2001', '2001-2002', '2002-2003', '2003-2004', '2004-2005', '2005-2006', '2006-2007', '2007-2008', 
                '2008-2009', '2009-2010', '2010-2011', '2011-2012', '2012-2013', '2013-2014', '2014-2015'];

// Updates data of current year
function update() {
    var year = currentYear.substr(2, 2) + currentYear.substr(7, 2);
    for (var i = 0; i < countries.length; i++) {
        var url = footballDataUrl.replace('{0}', year).replace('{1}', countryCodes[i]);
        updateData(url, countries[i], currentYear);
    }
}

// Updates data of old years
function updateAll() {
    for (var j = 0; j < oldYears.length; j++) {
        var year = oldYears[j].substr(2, 2) + oldYears[j].substr(7, 2);
        for (var i = 0; i < countries.length; i++) {
            var url = footballDataUrl.replace('{0}', year).replace('{1}', countryCodes[i]);
            updateData(url, countries[i], oldYears[j]);
        }
    }
}

// Updates a file with data from an url
function updateData(url, country, year) {
    var converter = new Converter({ constructResult: false });
    var result = [];

    converter.on('record_parsed', (jsonObj) => {
        result.push(jsonObj);
    });

    converter.on('end_parsed', () => {
        var fs = require('fs');
        fs.writeFile('./data/' + country + '/' + year + '.json', JSON.stringify(result), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('File updated: ' + country + '-' + year);
            }
        });
    });

    require('request').get(url).pipe(converter);
}

module.exports = {
    update: update,
    updateAll: updateAll
};