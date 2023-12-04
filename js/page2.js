const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

function draw(data)
{
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'a', 'b', 'c', 'd'],
      datasets: [{
          data: data,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'a', 'b', 'c', 'd'],
      datasets: [{
          data: data,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

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