/*--------- Alert Div function--------------*/

const alertDiv = document.querySelector('#alert');
alertDiv.innerHTML = 
                    `<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
                    <button class="alert-close">x</button>`;

alertDiv.addEventListener('click', e => {
  
    if (e.target.tagName === 'BUTTON') {
        alertDiv.style.transform = 'scale(0)';
        setTimeout( function () { 
            alertDiv.style.display = 'none'; 
        }, 700);
    }
});
/*--------- ----------- --------------------*/
/*---------------- CHART.JS-----------------*/

/*----------LINE GRAPH VARIABLES---- -------*/

const lineGraphX = document.querySelector('#lineGraph');
const dataHourly = [0, 150, 850, 400, 800, 500, 1050, 550, 1250, 650, 1150, 2000];
const dataDaily = [0, 500, 150, 450, 1050, 1200, 1750, 1050, 1650, 1450, 1500, 2500];
const dataWeekly = [0, 850, 1350, 900, 2100, 1000, 1250, 950, 1950, 1850, 1500, 2000];
const dataMonthly = [0, 1950, 2150, 1500, 1500, 1800, 1950, 1750, 1850, 2450, 1850, 2500];
const hourly = document.querySelector('li:nth-child(1)');
const daily = document.querySelector('li:nth-child(2)');
const weekly = document.querySelector('li:nth-child(3)');
const monthly = document.querySelector('li:nth-child(4)');
const listButtons = document.querySelectorAll('.traffic_list li button');
const trafficList = document.querySelector('.traffic_list');
/*--------- ----------- --------------------*/
/*--------------LINE GRAPH--- --------------*/
let lineGraph = new Chart(lineGraphX, {
    type: 'line',
    data: {
        labels: ["0", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
                "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: dataWeekly,               
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 2,
            pointBorderColor: 'darkblue',
            pointRadius: '8',
            lineTension: '0',
            }]                                                        
    },
    options: {
        legend : { 
            display: false 
        },  
        tooltips: {
            enabled: false
            },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: '18',                         
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: '18',                          
                }
            }],
        },   
        }       
});
/*--------- ----------- --------------------*/
/*-- -----LINE GRAPH DATA FUNCTION--------*/
const lineGraphChange = (data) => {
    lineGraph.data.datasets[0].data = data;
    lineGraph.update();      
}

// --- LINE GRAPH CLICK HANDLER
trafficList.addEventListener('click', (e) => {
    for ( let j = 0; j < listButtons.length; j += 1) {
        listButtons[j].setAttribute('id', '');
    }
    if (e.target.textContent === 'Hourly') {
        lineGraphChange(dataHourly);
    } else if (e.target.textContent === 'Daily') {
        lineGraphChange(dataDaily);
    } else if (e.target.textContent === 'Weekly') {
        lineGraphChange(dataWeekly);
    } else {
        lineGraphChange(dataMonthly);
    }
    e.target.setAttribute('id', 'chosen');
})

/*--------- ----------- --------------------*/
/*------- -------BAR CHART -----------------*/
const barChartX = document.querySelector('#barChart');

let barChart = new Chart(barChartX, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1
            }]                                                                                  
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
             ticks: {
                beginAtZero:true
                }
            }]
        },
            legend : {
                display: false 
            }
    }                
});
/*--------- ----------- --------------------*/
/*------- -------PIE CHART -----------------*/
const pieChartX = document.querySelector('#pieChart');

let pieChart = new Chart(pieChartX, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
            ]
    }]
                                                                                
    },
    options: {
        responsive: true,
        legend: {
            position: 'right',
            labels: {
            boxWidth: 20,
            fontStyle: 'bold'
            }
        }
    }                
});