define('account.model',
    function () {
		return function (accountNname) {
			var name = ko.observable(accountNname);
	
	        return {
	        	name: name
	        };	
		};
    });