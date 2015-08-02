define('context',
    function () {
    	var users = ko.observableArray();
    	var accounts = ko.observableArray();
        
        var isChartsViewVisible = ko.observable(false);
        var isRecordsViewVisible = ko.observable(false);
        var isConfigurationViewVisible = ko.observable(true);

        return {
            users: users,
            accounts: accounts,
            isChartsViewVisible: isChartsViewVisible,
            isRecordsViewVisible: isRecordsViewVisible,
            isConfigurationViewVisible: isConfigurationViewVisible
        };
    });