define('menu.viewmodel',
    ['context'],
    function (context) {
        function changeView(observable) {
            context.isChartsViewVisible(false);
            context.isRecordsViewVisible(false);
            context.isConfigurationViewVisible(false);
            
            observable(true);
        }

        return {
            isChartsViewVisible: context.isChartsViewVisible,
            isRecordsViewVisible: context.isRecordsViewVisible,
            isConfigurationViewVisible: context.isConfigurationViewVisible,
            changeView: changeView
        };
    });