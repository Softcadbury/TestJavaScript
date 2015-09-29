define('context',
    function () {
        var musics = ko.observableArray();

        return {
            musics: musics
        };
    });