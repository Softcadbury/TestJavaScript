define('context',
    function () {
    	var users = ko.observableArray();
    	var accounts = ko.observableArray();
        
        var isChartsViewVisible = ko.observable(false);
        var isRecordsViewVisible = ko.observable(true);
        var isConfigurationViewVisible = ko.observable(false);

        return {
            users: users,
            accounts: accounts,
            isChartsViewVisible: isChartsViewVisible,
            isRecordsViewVisible: isRecordsViewVisible,
            isConfigurationViewVisible: isConfigurationViewVisible
        };
    });