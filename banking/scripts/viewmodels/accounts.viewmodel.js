define('accounts.viewmodel',
    ['context', 'data', 'account.model', 'amount.model'],
    function (context, data, Account, Amount) {
        var selectedAccount = ko.observable();
        var newAccountName = ko.observable('');
        var newAmountValue = ko.observable('');
        var newAmountDate = ko.observable('');

        // Change the selected account
        function changeSelectedAccount(account) {
            if (selectedAccount()) {
                selectedAccount().isSelected(false);

                if (selectedAccount() == account) {
                    selectedAccount(null);
                    return;
                }
            }

            selectedAccount(account);
            selectedAccount().isSelected(true);

            $('.date-picker').datepicker({
                orientation: "top auto",
                autoclose: true,
                format: 'dd/mm/yyyy'
            });
        }

        // Add an account
        function addAccount() {
            if (newAccountName().trim()) {
                context.accounts.push(new Account(newAccountName().trim()));
                data.saveAccounts();
                newAccountName('');
            }
        }
        
        // Delete the selected account
        function deleteAccount() {
            if (selectedAccount()) {
                context.accounts.remove(selectedAccount());
                data.saveAccounts();
                selectedAccount(null);
            }
        }
        
        // Add a owner to the selected account
        function addOwner(user) {
            if (selectedAccount() && selectedAccount().owners().indexOf(user) == -1) {
                selectedAccount().owners.push(user);
                data.saveAccounts();
            }
        }
        
        // Remove the owner to the selected account
        function removeOwner(user) {
            if (selectedAccount()) {
                selectedAccount().owners.remove(user);
                data.saveAccounts();
            }
        }
        
        // Add an amount to the selected account
        function addAmount() {
            if (selectedAccount() && !isNaN(parseInt(newAmountValue().trim())) && newAmountDate().trim()) {
                selectedAccount().amounts.push(new Amount(newAmountValue(), newAmountDate()));
                data.saveAccounts();
                newAmountValue('');
                newAmountDate('');
            }
        }
        
        // Delete the amount to the selected account
        function deleteAmount(amount) {
            if (selectedAccount()) {
                selectedAccount().amounts.remove(amount);
                data.saveAccounts();
            }
        }

        return {
            isAccountsViewVisible: context.isAccountsViewVisible,
            accounts: context.accounts,
            users: context.users,
            selectedAccount: selectedAccount,
            newAccountName: newAccountName,
            newAmountValue: newAmountValue,
            newAmountDate: newAmountDate,
            changeSelectedAccount: changeSelectedAccount,
            addAccount: addAccount,
            deleteAccount: deleteAccount,
            addOwner: addOwner,
            removeOwner: removeOwner,
            addAmount: addAmount,
            deleteAmount: deleteAmount
        };
    });