
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
/*----------BAR CHART VARIABLES---- --------*/
const barChartX = document.querySelector('#barChart');
/*--------- ----------- --------------------*/
/*----------PIE CHART VARIABLES---- --------*/
const pieChartX = document.querySelector('#pieChart');
/*--------- ----------- --------------------*/
/*--------NOTIFICATION DIV VARIABLES---- ---*/
const notiDiv = document.querySelector('#notifications');
const notiButton = document.querySelector('.notifications');
const dot = document.querySelector('.dot');
/*--------- ----------- --------------------*/
/*----------ALERT DIV VARIABLES---- --------*/
const alertDiv = document.querySelector('#alert');
/*--------- ----------- --------------------*/
/*---------MESSAGE SECTION VARIABLES--------*/
const userSearch = document.querySelector('#user_search');
const userMessage = document.querySelector('#user_message');
const userSend = document.querySelector('#msg_send_button');
/*--------- ----------- --------------------*/
/*----------LOCAL STORAGE VARIABLES---------*/
const emailSwitch  = document.querySelector('#email_switch');
const profileSwitch  = document.querySelector('#profile_switch');
const buttonsDiv = document.querySelector('.form_buttons');
const timezone = document.querySelector('#timezone');
/*--------- ----------- --------------------*/

/*---------------JS FUNCTIONS---------------*/
/*--------- Alert Div function--------------*/
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

/*------- Notification Div function---------*/
notiDiv.style.display = 'none';
notiDiv.innerHTML = `<div class='alert_flex'><p>You have 6 unread messages</p> <button>x</button></div>
                     <div class='alert_flex'><p>You have 3 new followers</p> <button>x</button></div>
                     <div class='alert_flex'><p>Your password expires in 7 days</p> <button>x</button></div>`;
const notiItems = document.querySelectorAll('.alert_flex');

notiButton.addEventListener('click', () => {
    dot.style.display = 'none';
    if ( notiDiv.style.display === 'none' && notiItems.length > 0) {
        notiDiv.style.display = 'block';
    } else {
        notiDiv.style.display = 'none'
    }    
});
notiDiv.addEventListener('click', (e) => {
    
    if ( e.target.tagName === 'BUTTON') {
    e.target.parentNode.remove();
    console.log(notiItems.length);
        if ( notiItems.length === 1 ) {
            notiDiv.style.display = 'none';
        }
    }
});
/*--------- ----------- --------------------*/
/*-------------- CHART.JS-------------------*/
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
/*-- ------LINE GRAPH DATA FUNCTION---------*/
// This function accepts the new data as the parameter then updates the graph!
const lineGraphChange = (data) => {
    lineGraph.data.datasets[0].data = data;
    lineGraph.update();      
}
// --- LINE GRAPH CLICK HANDLER
trafficList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
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
        }
    })

/*--------- ----------- --------------------*/
/*------- -------BAR CHART -----------------*/
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
/*--------- ----------- --------------------*/
/*------- ----MESSAGE SECTION JS -----------*/
// This ensures the user has entered info into all the fields before they 'clicl' send button.
userSend.addEventListener('click', () => {
    if ( userSearch.value === '' && userMessage.value === '' ) {
        alert('Search and message fields are both blank!');
    } else if ( userSearch.value === '' ) {
        alert('The search field is blank!');
    } else if ( userMessage.value === '' ) {
        alert('The message field must be filled in!');
    } else {
        alert(`Thanks! Your message was sent successfully sent to ${userSearch.value}`);
    }
});
/*--------- ----------- --------------------*/
/*---- ----LOCAL STORAGE function ----------*/
buttonsDiv.addEventListener('click', (e) => {
    if (e.target.textContent === 'SAVE') {
        if (timezone.value === 'Select a Timezone') {
            // We don't
            alert('Please select a Timezone!');
        } else {
            localStorage.setItem('emailSwitch', emailSwitch.checked);
            localStorage.setItem('profileSwitch', profileSwitch.checked);
            localStorage.setItem('timezone', timezone.value);
        }
    }   
    if (e.target.textContent === 'CANCEL') {
        localStorage.clear();
        location.reload();
        }
});
window.addEventListener('load', () => {
    if (localStorage.getItem("emailSwitch") !== null) {
        const emailChecked = JSON.parse(localStorage.getItem('emailSwitch'));
        const profileChecked = JSON.parse(localStorage.getItem('profileSwitch'));
        const timezoneValue = localStorage.getItem('timezone');
        if (emailChecked === true && profileChecked === true) {
            emailSwitch.checked = true;
            profileSwitch.checked = true;
        } else if (profileChecked === true) {
            profileSwitch.checked = true;
        } else {
            emailSwitch.checked = true;
        }
        timezone.value = timezoneValue;
    }
})
