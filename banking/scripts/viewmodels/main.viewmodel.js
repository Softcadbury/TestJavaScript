define('main.viewmodel',
    ['account.model'],
    function (accountModel) {
    	var accounts = ko.observableArray();

        accounts.push(new accountModel('Aaa'));
        accounts.push(new accountModel('Bbb'));

        return {
        	accounts: accounts
        };
    });