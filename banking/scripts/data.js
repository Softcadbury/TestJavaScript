define('data',
    ['context', 'account.model', 'amount.model', 'user.model'],
    function (context, Account, Amount, User) {
        // Loads the context of users
        function loadUsers() {
            var data = localStorage.getItem('users');
            if (data) {
                var parsedData = JSON.parse(data);

                parsedData.forEach(function (user) {
                    var loadedUser = new User(user.id, user.name);
                    context.users.push(loadedUser);
                });
            }
        }
        
        // Loads the context of accounts. Users must be loaded to get owners.
        function loadAcounts() {
            var data = localStorage.getItem('accounts');
            if (data) {
                var parsedData = JSON.parse(data);

                parsedData.forEach(function (account) {
                    var loadedAccount = new Account(account.name);
                    context.accounts.push(loadedAccount);

                    account.amounts.forEach(function (amount) {
                        loadedAccount.amounts.push(new Amount(amount.value, amount.date));
                    });

                    account.owners.forEach(function (owner) {
                        context.users().forEach(function (user) {
                            if (owner.id == user.id) {
                                loadedAccount.owners.push(user);
                            }
                        });
                    });
                });
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