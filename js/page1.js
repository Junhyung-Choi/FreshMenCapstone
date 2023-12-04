const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2')

function draw(dx) {
  new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['1st','2nd', '3rd','4th','5th','6th', '7th','8th','9th','10th'],
    datasets: [{
      data: dx
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

function draw2(dx) {
  new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['1st','2nd', '3rd','4th','5th','6th', '7th','8th','9th','10th'],
    datasets: [{
      data: dx
    }],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)',
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
    
  },
  options: {
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
    draw2(data);
  });
}


request();

