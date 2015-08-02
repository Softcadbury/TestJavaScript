require(['configuration.viewmodel', 'menu.viewmodel'],
    function (configurationViewmodel, menuViewmodel) {
        ko.applyBindings(menuViewmodel, document.getElementById('menu'));
        ko.applyBindings(configurationViewmodel, document.getElementById('configuration'));
        
        $('#main').css("display", "block")
    });