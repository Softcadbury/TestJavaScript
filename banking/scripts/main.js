require(['configuration.viewmodel'],
    function (configurationViewmodel) {
        ko.applyBindings(configurationViewmodel, document.getElementById('configuration'));
        
        $('#main').css("display", "block")
    });