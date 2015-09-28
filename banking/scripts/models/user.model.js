define('user.model',
    function () {
		return function (id, userNname) {
			var name = ko.observable(userNname);
			var isSelected = ko.observable(false);

			return {
				id: id,
				name: name,
				isSelected: isSelected
			};
		};
    });