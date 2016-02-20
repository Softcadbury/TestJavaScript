'use strict';

var gulp = require('gulp');
var jsonfile = require('jsonfile');
var util = require('util');

gulp.task('read', () => {
    var file = './PL-2014-2015.json';
    
    jsonfile.readFile(file, (err, obj) => {
        var teams = {};

        for (var i = 0; i < obj.length; i++) {
            var homeTeam = obj[i].HomeTeam;
            if (!teams.hasOwnProperty(homeTeam)) {
                teams[homeTeam] = {
                    win: 0,
                    lost: 0,
                    draw: 0
                };
            }
            
            teams[homeTeam].win += obj[i].FTR == 'H' ? 1 : 0;
            teams[homeTeam].lost += obj[i].FTR == 'A' ? 1 : 0;
            teams[homeTeam].draw += obj[i].FTR == 'D' ? 1 : 0;
            
            var awayTeam = obj[i].AwayTeam;
            if (!teams.hasOwnProperty(awayTeam)) {
                teams[awayTeam] = {
                    win: 0,
                    lost: 0,
                    draw: 0
                };
            }
            
            teams[awayTeam].win += obj[i].FTR == 'A' ? 1 : 0;
            teams[awayTeam].lost += obj[i].FTR == 'H' ? 1 : 0;
            teams[awayTeam].draw += obj[i].FTR == 'D' ? 1 : 0;
        }

        console.log(teams);
    })
});
