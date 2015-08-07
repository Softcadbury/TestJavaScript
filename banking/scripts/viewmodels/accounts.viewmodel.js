define('accounts.viewmodel',
    ['context', 'account.model'],
    function (context, Account) {
        var selectedAccount = ko.observable();
        var newAccountName = ko.observable('');

        // Change the selected account
        function changeSelectedAccount(data) {
            if (selectedAccount()) {
                selectedAccount().isSelected(false);
            }

            selectedAccount(data);
            selectedAccount().isSelected(true);
        }

        // Add an account
        function addAccount() {
            if (newAccountName().trim()) {
                context.accounts.push(new Account(newAccountName().trim()));
                newAccountName('');
            }
        }
        
        // Delete the selected account
        function deleteAccount(data) {
            if (selectedAccount()) {
                context.accounts.remove(selectedAccount());
                selectedAccount(null);
            }
        }

        return {
            isAccountsViewVisible: context.isAccountsViewVisible,
            accounts: context.accounts,
            selectedAccount: selectedAccount,
            newAccountName: newAccountName,
            changeSelectedAccount: changeSelectedAccount,
            addAccount: addAccount,
            deleteAccount: deleteAccount
        };
    });