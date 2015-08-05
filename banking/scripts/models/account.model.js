define('account.model',
    function () {
		return function (accountNname) {
			var name = ko.observable(accountNname);
			var isSelected = ko.observable(false);
	
	        return {
	        	name: name,
				isSelected: isSelected
	        };	
		};
    });