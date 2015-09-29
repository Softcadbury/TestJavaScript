define('data',
    ['context'],
    function (context, Account, Amount, User) {
        // Loads the context of musics
        function loadMusics() {
            var data = localStorage.getItem('musics');
            if (data) {
                var parsedData = JSON.parse(data);
                parsedData.forEach(function (music) {
                    context.musics.push(music);
                });
            }
        }
        
        // Saves the context of users
        function saveMusics() {
            var data = ko.toJSON(context.musics);
            localStorage.setItem('musics', data);
        }

        return {
            loadMusics: loadMusics,
            saveMusics: saveMusics
        };
    });