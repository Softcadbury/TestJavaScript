define('charts.viewmodel',
    ['context'],
    function (context) {
        var chartsViewElement = $('#charts-view');

        context.isChartsViewVisible.subscribe(function (newValue) {
            if (newValue) {
                chartsViewElement.empty();
                context.accounts().forEach(function (account, index) {
                    var dataPoints = [];

                    account.sortedAmounts().forEach(function (amount) {
                        var splitedDate = amount.date().split('/');
                        var date = new Date(splitedDate[2], splitedDate[1], splitedDate[0]);
                        dataPoints.push({ x: date, y: parseInt(amount.value()) });
                    });

                    var chartName = 'chart-' + index;
                    chartsViewElement.append('<div class="chart-account"><div width="400" height="400" id="' + chartName + '"></div></div>');
                    addChart(chartName, account.name(), dataPoints);
                });
            }
        });

        // Create a chart
        function addChart(elementId, chartTitle, dataPoints) {
            setTimeout(function () {
                var chart = new CanvasJS.Chart(elementId,
                    {
                        title: { text: chartTitle },
                        axisX: { valueFormatString: 'MMM-YYYY' },
                        axisY: { valueFormatString: '# €' },
                        data: [{
                            type: 'line',
                            color: 'rgba(0,75,141,0.7)',
                            dataPoints
                        }]
                    });

                chart.render();
            }, 0);
        }

        return {
            isChartsViewVisible: context.isChartsViewVisible
        };
    });