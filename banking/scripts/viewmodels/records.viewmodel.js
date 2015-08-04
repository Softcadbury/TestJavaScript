define('records.viewmodel',
    ['context'],
    function (context) {
        var selectedAccount = ko.observable();
        
        return {
            isRecordsViewVisible: context.isRecordsViewVisible,
            accounts: context.accounts,
            selectedAccount: selectedAccount
        };
    });