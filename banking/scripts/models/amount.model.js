define('amount.model',
    function () {
		return function (amountValue, amountDate) {
			var value = ko.observable(amountValue);
			var date = ko.observable(amountDate);

	        return {
	        	value: value,
				date: date
	        };
		};
    });