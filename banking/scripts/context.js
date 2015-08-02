define('context',
    function () {
    	var accounts = ko.observableArray();

        return {
        	accounts: accounts
        };
    });