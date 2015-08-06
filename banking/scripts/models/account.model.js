define('account.model',
    function () {
		return function (accountNname, accountInitialValue) {
			var name = ko.observable(accountNname);
			var initialValue = ko.observable(accountInitialValue);
			var isSelected = ko.observable(false);

	        return {
	        	name: name,
				initialValue: initialValue,
				isSelected: isSelected
	        };
		};
    });