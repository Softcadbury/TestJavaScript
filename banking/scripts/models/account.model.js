define('account.model',
    function () {
		return function (accountNname) {
			var name = ko.observable(accountNname);
			var amounts = ko.observableArray();
			var isSelected = ko.observable(false);

	        return {
	        	name: name,
				amounts: amounts,
				isSelected: isSelected
	        };
		};
    });