define('configuration.viewmodel',
    ['context', 'user.model', 'account.model'],
    function (context, User, Account) {
        var newUserName = ko.observable('');
        var newAccountName = ko.observable('');
        
        // Add a user
        function addUser() {
            if (newUserName().trim()) {
                context.users.push(new User(newUserName().trim()));
                newUserName('');
            }
        }
        
        // Add an account
        function addAccount() {
            if (newAccountName().trim()) {
                context.accounts.push(new Account(newAccountName().trim()));
                newAccountName('');
            }
        }

        return {
            isConfigurationViewVisible: context.isConfigurationViewVisible,
            users: context.users,
            accounts: context.accounts,
            newUserName: newUserName,
            newAccountName: newAccountName,
            addUser: addUser,
            addAccount: addAccount
        };
    });