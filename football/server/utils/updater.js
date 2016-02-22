'use strict';

var Converter = require('csvtojson').Converter;
var footballDataUrl = 'http://www.football-data.co.uk/mmz4281/{0}/{1}.csv';
var countries = ['England', 'France', 'Germany', 'Italy', 'Spain'];
var countryCodes = ['E0', 'F1', 'D1', 'I1', 'SP1'];
var currentYear = 2015;
var oldYear = 1993;

// Updates data of current year
function updateCurrent() {
    var period = getPeriod(currentYear);
    var periodCode = getPeriodCode(currentYear);

    for (var i = 0; i < countries.length; i++) {
        updateData(countries[i], countryCodes[i], period, periodCode);
    }
}

// Updates data of old years
function updateAll() {
    var years = [];

    for (var i = oldYear; i < currentYear; i++) {
        years.push(i);
    }

    for (var j = 0; j < years.length; j++) {
        var period = getPeriod(years[j]);
        var periodCode = getPeriodCode(years[j]);

        for (var i = 0; i < countries.length; i++) {
            updateData(countries[i], countryCodes[i], period, periodCode);
        }
    }
}

// Gets the period of a year (2001 -> 2001-2002)
function getPeriod(year) {
    return year + '-' + (year + 1);
}

// Gets the period code of a year (2001 -> 0102)
function getPeriodCode(year) {
    var part1 = ('00' + (year % 100)).slice(-2);
    var part2 = ('00' + ((year + 1) % 100)).slice(-2);

    return part1 + part2;
}

// Updates a file with data from an url
function updateData(country, countryCode, period, periodCode) {
    var converter = new Converter({ constructResult: false });
    var result = [];

    converter.on('record_parsed', (jsonObj) => {
        result.push(jsonObj);
    });

    converter.on('end_parsed', () => {
        var fs = require('fs');
        fs.writeFile('./data/' + country + '/' + period + '.json', JSON.stringify(result), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('File updated: ' + country + '-' + period);
            }
        });
    });

    var url = getUrl(periodCode, countryCode);
    require('request').get(url).pipe(converter);
}

// Gets the url to get the data
function getUrl(periodCode, countryCode) {
    return footballDataUrl.replace('{0}', periodCode).replace('{1}', countryCode);
}

module.exports = {
    updateCurrent: updateCurrent,
    updateAll: updateAll
};