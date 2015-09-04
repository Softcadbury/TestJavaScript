define('charts.viewmodel',
    ['context'],
    function (context) {
        context.isChartsViewVisible.subscribe(function (newValue) {
            if (newValue) {
                var dataPoints = [
                    { x: new Date(2012, 06, 18), y: 20 },
                    { x: new Date(2012, 06, 23), y: 30 },
                    { x: new Date(2012, 07, 1), y: 10 },
                    { x: new Date(2012, 07, 11), y: 21 },
                    { x: new Date(2012, 07, 23), y: 50 },
                    { x: new Date(2012, 07, 31), y: 75 },
                    { x: new Date(2012, 08, 04), y: 10 },
                    { x: new Date(2012, 08, 10), y: 12 },
                    { x: new Date(2012, 08, 13), y: 15 },
                    { x: new Date(2012, 08, 16), y: 17 },
                    { x: new Date(2012, 08, 18), y: 20 },
                    { x: new Date(2012, 08, 21), y: 22 },
                    { x: new Date(2012, 08, 24), y: 25 },
                    { x: new Date(2012, 08, 26), y: 27 },
                    { x: new Date(2012, 08, 28), y: 30 },
                    { x: new Date(2015, 06, 15), y: 0 },
                ];

                AddChart('myChart', 'title', dataPoints);
            }
        });

        function AddChart(elementId, chartTitle, dataPoints) {
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