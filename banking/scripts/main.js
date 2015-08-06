require(['menu.viewmodel', 'charts.viewmodel', 'accounts.viewmodel', 'users.viewmodel'],
    function (menuViewmodel, chartsViewmodel, accountsViewmodel, usersViewmodel) {
        ko.applyBindings(menuViewmodel, document.getElementById('menu-view'));
        ko.applyBindings(chartsViewmodel, document.getElementById('charts-view'));
        ko.applyBindings(accountsViewmodel, document.getElementById('accounts-view'));
        ko.applyBindings(usersViewmodel, document.getElementById('users-view'));
        
        $('#main').css("display", "block")
    });