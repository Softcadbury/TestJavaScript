define('account.model',
    function () {
		return function (accountNname) {
			var name = ko.observable(accountNname);
			var amounts = ko.observableArray();
			var owners = ko.observableArray();
			var isSelected = ko.observable(false);

			var sortedAmounts = ko.computed(function () {
				return amounts().sort(function (amount1, amount2) {
					var splitedDate1 = amount1.date().split('/');
                    var date1 = new Date(splitedDate1[2], splitedDate1[1], splitedDate1[0]);					
					
					var splitedDate2 = amount2.date().split('/');
					var date2 = new Date(splitedDate2[2], splitedDate2[1], splitedDate2[0]);
					
					return date1 - date2;
				});
			});

			return {
				name: name,
				amounts: amounts,
				owners: owners,
				isSelected: isSelected,
				sortedAmounts: sortedAmounts
			};
		};
    });