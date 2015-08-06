define('accounts.viewmodel',        
    ['context', 'account.model'],
    function (context, Account) {
        var selectedAccount = ko.observable();
        var newAccountName = ko.observable('');
        var newInitialAmount = ko.observable('');
        
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
        
        return {
            isAccountsViewVisible: context.isAccountsViewVisible,
            accounts: context.accounts,
            selectedAccount: selectedAccount,
            newAccountName: newAccountName,
            newInitialAmount: newInitialAmount,
            changeSelectedAccount: changeSelectedAccount,
            addAccount: addAccount
        };
    });