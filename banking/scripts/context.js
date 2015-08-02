define('context',
    function () {
    	var users = ko.observableArray();
    	var accounts = ko.observableArray();

        return {
            users: users,
        	accounts: accounts
        };
    });