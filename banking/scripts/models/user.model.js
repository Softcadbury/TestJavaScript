define('user.model',
    function () {
		return function (userNname) {
			var name = ko.observable(userNname);
	
	        return {
	        	name: name
	        };	
		};
    });