define('charts.viewmodel',
    ['context'],
    function (context) {
        return {
            isChartsViewVisible: context.isChartsViewVisible
        };
    });