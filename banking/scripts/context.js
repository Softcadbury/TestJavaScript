define('context',
    function () {
    	var users = ko.observableArray();
    	var accounts = ko.observableArray();

        var isChartsViewVisible = ko.observable(false);
        var isAccountsViewVisible = ko.observable(true);
        var isUsersViewVisible = ko.observable(false);

        return {
            users: users,
            accounts: accounts,
            isChartsViewVisible: isChartsViewVisible,
            isAccountsViewVisible: isAccountsViewVisible,
            isUsersViewVisible: isUsersViewVisible
        };
    });