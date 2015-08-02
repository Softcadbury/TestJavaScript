define('account.model',
    function () {
		return function (name) {
			var name = ko.observable(name);
	
	        return {
	        	name: name
	        };	
		};
    });