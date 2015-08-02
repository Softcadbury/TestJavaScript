require(['main.viewmodel'],
    function (mainViewmodel) {
        ko.applyBindings(mainViewmodel, document.getElementById('main'));
    });