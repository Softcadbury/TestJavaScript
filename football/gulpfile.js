'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var updater = require('./server/utils/updater');

// Updates the current data
gulp.task('update', () => {
    updater.updateData('http://www.football-data.co.uk/mmz4281/1516/E0.csv', 'PremierLeague/2015-2016');
});

// Updates all data
gulp.task('updateall', ['update'], () => {
    updater.updateData('http://www.football-data.co.uk/mmz4281/1415/E0.csv', 'PremierLeague/2014-2015');
});

// Parses data
gulp.task('parse', () => {
    var jsonfile = require('jsonfile');
    var file = './data/PremierLeague/2014-2015.json';

    jsonfile.readFile(file, (err, obj) => {
        var teams = {};

        for (var i = 0; i < obj.length; i++) {
            var homeTeamName = obj[i].HomeTeam;
            var awayTeamName = obj[i].AwayTeam;
            var homeTeamGoals = obj[i].FTHG;
            var awayTeamGoals = obj[i].FTAG;
            var result = obj[i].FTR;

            // Home team
            if (!teams.hasOwnProperty(homeTeamName)) {
                teams[homeTeamName] = createTeamObject();
                teams[homeTeamName].name = homeTeamName;
            }

            var homeTeam = teams[homeTeamName];
            homeTeam.win += result == 'H' ? 1 : 0;
            homeTeam.draw += result == 'D' ? 1 : 0;
            homeTeam.lost += result == 'A' ? 1 : 0;
            homeTeam.goalsFor += homeTeamGoals;
            homeTeam.goalsAgainst += awayTeamGoals;

            // Away team
            if (!teams.hasOwnProperty(awayTeamName)) {
                teams[awayTeamName] = createTeamObject();
                teams[awayTeamName].name = awayTeamName;
            }

            var awayTeam = teams[awayTeamName];
            awayTeam.win += result == 'A' ? 1 : 0;
            awayTeam.draw += result == 'D' ? 1 : 0;
            awayTeam.lost += result == 'H' ? 1 : 0;
            awayTeam.goalsFor += awayTeamGoals;
            awayTeam.goalsAgainst += homeTeamGoals;
        }

        // Add score to teams and format them in an array
        var formatedTeams = [];
        for (var team in teams) {
            teams[team].score = getTeamScore(teams[team]);
            formatedTeams.push(teams[team]);
        }

        console.log(formatedTeams.sort((t1, t2) => {
            return t2.score - t1.score;
        }));
    })
});

// Creates a team object
function createTeamObject() {
    return {
        name: '',
        score: 0,
        win: 0,
        draw: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0
    };
}

// Gets the score of a team
function getTeamScore(team) {
    return team.win * 3 + team.draw
}

// Start the node server
gulp.task('start', function () {
    var options = {
        script: 'server/app.js',
        delayTime: 1,
        env: {
            'PORT': 5000
        },
        watch: ['./*.js', './server/*.js']
    };

    return nodemon(options).on('restart', function () {
        console.log('Restarting...');
    });
});