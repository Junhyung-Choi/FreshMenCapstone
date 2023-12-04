const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
// const data = [12, 19, 3, 5, 2, 3];

let a = "a";

function draw(newData)
{
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [{
          data: newData,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  });

  new Chart(ctx2, {
    type : 'doughnut',
    data : {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [{
          data: newData,
        borderWidth: 2
      }]
    },
  })
}

function request() {
  fetch('https://draxasapi.run.goorm.site/analysis/', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    redirect: 'follow'
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    draw(data);
  });
}
request();