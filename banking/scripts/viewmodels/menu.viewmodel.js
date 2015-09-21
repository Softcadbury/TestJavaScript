define('menu.viewmodel',
    ['context'],
    function (context) {
        // Hide every views except the requested one
        function changeView(visibilityToChange) {
            context.isChartsViewVisible(false);
            context.isAccountsViewVisible(false);
            context.isUsersViewVisible(false);

            visibilityToChange(true);
        }

        return {
            isChartsViewVisible: context.isChartsViewVisible,
            isAccountsViewVisible: context.isAccountsViewVisible,
            isUsersViewVisible: context.isUsersViewVisible,
            changeView: changeView
        };
    });