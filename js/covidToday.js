const recovertxt = document.getElementById('cumulative_recovered_cases')
const todayCasestxt = document.getElementById('daily_covid_cases')
const deathtxt = document.getElementById('cumulative_deaths')
const todayDeathstxt = document.getElementById('daily_deaths')
const todayRecoveredtxt = document.getElementById('daily_recovered')
const vaccinetxt = document.getElementById('cumulative_vaccines')
const updateDatetxt = document.getElementById('updated_date')

async function covidToday() {
    await fetch('https://api-lab-covid.mindbase.co.th/v2/stats/daily?key=0d2d600b-0e28-4cbd-b27f-20210941e20532c079')
   .then(response => response.json())
   .then(data => {
       if (recovertxt) {
            recovertxt.innerHTML = data.data.cumulative_recovered_cases.toLocaleString()
       }
       if (todayCasestxt) {
            todayCasestxt.innerHTML = data.data.daily_covid_cases.toLocaleString()
       }
       if (deathtxt) {
            deathtxt.innerHTML = data.data.cumulative_deaths.toLocaleString()
       }
       if (todayDeathstxt) {
            todayDeathstxt.innerHTML = data.data.daily_deaths.toLocaleString()
       }
       if (todayRecoveredtxt) {
            todayRecoveredtxt.innerHTML = data.data.daily_recovered.toLocaleString()
       }
       if (vaccinetxt) {
            vaccinetxt.innerHTML = data.data.cumulative_vaccines.toLocaleString()
       }
       if (updateDatetxt) {
           updateDatetxt.innerHTML = data.data.updated_date.toLocaleString()
       }
 
   }
     );
 }

 covidToday()