define('main.viewmodel',
    ['context', 'account.model'],
    function (context, Account) {        
        var newAccountName = ko.observable('');
        
        // Add an account
        function addAccount() {
            if (newAccountName().trim()) {
                context.accounts.push(new Account(newAccountName().trim()));
                newAccountName('');
            }
        }

        return {
        	accounts: context.accounts,
            newAccountName: newAccountName,
            addAccount: addAccount
        };
    });