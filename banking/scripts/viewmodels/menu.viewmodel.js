define('menu.viewmodel',
    ['context'],
    function (context) {
        function changeView(observable) {
            context.isChartsViewVisible(false);
            context.isAccountsViewVisible(false);
            context.isUsersViewVisible(false);
            
            observable(true);
        }

        return {
            isChartsViewVisible: context.isChartsViewVisible,
            isAccountsViewVisible: context.isAccountsViewVisible,
            isUsersViewVisible: context.isUsersViewVisible,
            changeView: changeView
        };
    });