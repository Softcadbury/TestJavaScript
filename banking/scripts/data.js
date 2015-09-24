define('data',
    ['context', 'account.model', 'amount.model', 'user.model'],
    function (context, Account, Amount, User) {
        // Loads the context of users
        function loadUsers() {
            var data = localStorage.getItem('users');
            if (data) {
                var parsedData = JSON.parse(data);

                parsedData.forEach(function (user) {
                    context.users.push(new User(user.name));
                });
            }
        }
        
        // Loads the context of accounts
        function loadAcounts() {
            var data = localStorage.getItem('accounts');
            if (data) {
                var parsedData = JSON.parse(data);
            }
        }
        
        // Saves the context of users
        function saveUsers() {
            var data = ko.toJSON(context.users);
            localStorage.setItem('users', data);
        }
        
        // Saves the context of accounts
        function saveAccounts() {
            var data = ko.toJSON(context.accounts);
            localStorage.setItem('accounts', data);
        }

        return {
            loadUsers: loadUsers,
            loadAcounts: loadAcounts,
            saveUsers: saveUsers,
            saveAccounts: saveAccounts
        };
    });