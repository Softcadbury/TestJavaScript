define('main.viewmodel',
    ['context', 'account.model'],
    function (context, Account) {
        context.accounts.push(new Account('Aaa'));
        context.accounts.push(new Account('Bbb'));

        return {
        	accounts: context.accounts
        };
    });