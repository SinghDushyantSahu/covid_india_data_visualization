var myChart;
async function constructPieChart(data) {
    const chartData = await data;
    const ctx = document.getElementById('myChart').getContext('2d');
    if (myChart) myChart.destroy();
    
    var sizeFont = 12;
    console.log(window.innerWidth);
    if (window.innerWidth < '376')
        sizeFont = 9;
    else if (window.innerWidth < '650')
        sizeFont = 10;
    else if (window.innerWidth < '1280')
        sizeFont = 11;

    myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Active Cases', 'Newly Infected', 'Recovered', 'Decreased'],
            datasets: [{
                data: chartData,
                backgroundColor: [
                    '#ac6666',
                    '#feb5b5',
                    '#2e9996',
                    '#c2be31',
                ],
                borderColor: [
                    '#974040',
                    '#fc6b6b',
                    '#1c5c5a',
                    '#66641a',
                ],
                borderWidth: 2
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: sizeFont
                        }
                    }
                }
            }
        }
    });
}   
