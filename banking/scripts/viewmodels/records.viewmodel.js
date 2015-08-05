define('records.viewmodel',
    ['context'],
    function (context) {
        var selectedAccount = ko.observable();
        
        // Change the selected account
        function changeSelectedAccount(data) {
            if (selectedAccount()) {
                selectedAccount().isSelected(false);    
            }
            
            selectedAccount(data);
            selectedAccount().isSelected(true);
        }
        
        return {
            isRecordsViewVisible: context.isRecordsViewVisible,
            accounts: context.accounts,
            selectedAccount: selectedAccount,
            changeSelectedAccount: changeSelectedAccount
        };
    });