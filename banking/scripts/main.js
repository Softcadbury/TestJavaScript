require(['menu.viewmodel', 'charts.viewmodel', 'records.viewmodel', 'configuration.viewmodel'],
    function (menuViewmodel, chartsViewmodel, recordsViewmodel, configurationViewmodel) {
        ko.applyBindings(menuViewmodel, document.getElementById('menu'));
        ko.applyBindings(chartsViewmodel, document.getElementById('charts'));
        ko.applyBindings(recordsViewmodel, document.getElementById('records'));
        ko.applyBindings(configurationViewmodel, document.getElementById('configuration'));
        
        $('#main').css("display", "block")
    });