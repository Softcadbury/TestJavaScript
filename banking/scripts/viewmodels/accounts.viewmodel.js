define('accounts.viewmodel',
    ['context', 'account.model', 'amount.model'],
    function (context, Account, Amount) {
        var selectedAccount = ko.observable();
        var newAccountName = ko.observable('');
        var newAmountValue = ko.observable('');
        var newAmountDate = ko.observable('');
        
        context.accounts.push(new Account('Livret A'));

        // Change the selected account
        function changeSelectedAccount(data) {
            if (selectedAccount()) {
                selectedAccount().isSelected(false);
            }

            selectedAccount(data);
            selectedAccount().isSelected(true);
            
            $('.date-picker').datepicker({
                orientation: "top auto"
            });
        }

        // Add an account
        function addAccount() {
            if (newAccountName().trim()) {
                context.accounts.push(new Account(newAccountName().trim()));
                newAccountName('');
            }
        }
        
        // Add an amount
        function addAmount() {
            if (selectedAccount() && !isNaN(parseInt(newAmountValue().trim())) && newAmountDate().trim()) {
                selectedAccount().amounts.push(new Amount(newAmountValue(), newAmountDate()));
                newAmountValue('');
                newAmountDate('');
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
            newAmountValue: newAmountValue,
            newAmountDate: newAmountDate,
            changeSelectedAccount: changeSelectedAccount,
            addAccount: addAccount,
            addAmount: addAmount,
            deleteAccount: deleteAccount
        };
    });