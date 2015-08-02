define('records.viewmodel',
    ['context'],
    function (context) {
        return {
            isRecordsViewVisible: context.isRecordsViewVisible
        };
    });