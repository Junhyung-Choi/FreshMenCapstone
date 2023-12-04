const ctx = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');

// const data = [2, 4, 6, 8, 10, 12];
function draw(da) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1', '2', '3', '4', '5', '6','7','8','9','10'],
      datasets: [{
        data: da,
        // label: data,
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
    type: 'polarArea',
    data: {
      labels:  ['1', '2', '3', '4', '5', '6','7','8','9','10'],
      datasets: [{
        data: da,
        // label: data,
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
// draw();
