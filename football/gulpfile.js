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
            var awayTeam = obj[i].AwayTeam;
            var homeTeamGoals = obj[i].FTHG;
            var awayTeamGoals = obj[i].FTAG;
            var result = obj[i].FTR;

            // Home team
            if (!teams.hasOwnProperty(homeTeam)) {
                teams[homeTeam] = createTeamObject();
            }

            teams[homeTeam].win += result == 'H' ? 1 : 0;
            teams[homeTeam].draw += result == 'D' ? 1 : 0;
            teams[homeTeam].lost += result == 'A' ? 1 : 0;
            teams[homeTeam].goalsFor += homeTeamGoals;
            teams[homeTeam].goalsAgainst += awayTeamGoals;

            // Away team
            if (!teams.hasOwnProperty(awayTeam)) {
                teams[awayTeam] = createTeamObject();
            }

            teams[awayTeam].win += result == 'A' ? 1 : 0;
            teams[awayTeam].draw += result == 'D' ? 1 : 0;
            teams[awayTeam].lost += result == 'H' ? 1 : 0;
            teams[awayTeam].goalsFor += awayTeamGoals;
            teams[awayTeam].goalsAgainst += homeTeamGoals;
        }

        console.log(teams);
    })
});

// Create team object
function createTeamObject() {
    return {
        win: 0,
        draw: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0
    };
}