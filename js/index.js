const ctx = document.getElementById('myChart');
const data = [12, 19, 3, 5, 2, 3];

let a = "a";

function draw()
{
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          data: data,
          label: a,
        borderWidth: 1
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
    // draw();
  });
}
request();
// draw();