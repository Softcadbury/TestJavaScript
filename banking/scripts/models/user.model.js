define('user.model',
    function () {
		return function (userNname) {
			var name = ko.observable(userNname);
			var isSelected = ko.observable(false);

			return {
				name: name,
				isSelected: isSelected
			};
		};
    });