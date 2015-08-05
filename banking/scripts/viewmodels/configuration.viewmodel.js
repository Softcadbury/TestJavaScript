define('configuration.viewmodel',
    ['context', 'user.model', 'account.model'],
    function (context, User, Account) {
        var newUserName = ko.observable('');
        var newAccountName = ko.observable('');
        var newInitialValue = ko.observable('');
        
         context.accounts.push(new Account('Livret A', 0));
         context.accounts.push(new Account('Assurance vie', 1000));
        
        // Add a user
        function addUser() {
            if (newUserName().trim()) {
                context.users.push(new User(newUserName().trim()));
                newUserName('');
            }
        }
        
        // Add an account
        function addAccount() {
            if (newAccountName().trim() && newInitialValue().trim() && !isNaN(parseInt(newInitialValue().trim()))) {
                context.accounts.push(new Account(newAccountName().trim(), newInitialValue().trim()));
                newAccountName('');
                newInitialValue('');
            }
        }

        return {
            isConfigurationViewVisible: context.isConfigurationViewVisible,
            users: context.users,
            accounts: context.accounts,
            newUserName: newUserName,
            newAccountName: newAccountName,
            newInitialValue: newInitialValue,
            addUser: addUser,
            addAccount: addAccount
        };
    });