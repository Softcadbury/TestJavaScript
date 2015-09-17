define('charts.viewmodel',
    ['context'],
    function (context) {
        context.isChartsViewVisible.subscribe(function (newValue) {
            if (newValue) {
                var dataPoints = [];
                
                context.accounts()[0].sortedAmounts().forEach(function (amount) {
                    var splitedDate = amount.date().split('/');
                    var date = new Date(splitedDate[2], splitedDate[1], splitedDate[0]);
                    dataPoints.push({ x: date, y: parseInt(amount.value()) });    
                });

                $('#charts-view').html('');
                $('#charts-view').append('<div id="myChart" width="400" height="400"></div>');
                addChart('myChart', context.accounts()[0].name(), dataPoints);
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