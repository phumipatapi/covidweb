const date = [];
const totalCase = [];

function chart() {
  var ctx = document.getElementById("totalCase").getContext("2d");
  Chart.defaults.global.defaultFontColor = "#bdbdbd";
  Chart.defaults.global.defaultFontFamily = "Oxygen";
  var chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: date.slice(-7),
      datasets: [
        {
          data: totalCase.slice(-7),
          backgroundColor: "rgba(255, 105, 97, 0.2)",
          borderColor: "rgba(255, 105, 97, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

async function covidAllTime() {
  await fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
    .then((response) => response.json())
    .then((data) =>
      data.map((data) => {
        date.push(data.txn_date);
        totalCase.push(data.total_case);
      })
    );
  chart();
}

covidAllTime();
