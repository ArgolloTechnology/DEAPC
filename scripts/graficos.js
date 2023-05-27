var ctx = document.getElementById('myChart');
var myChart2 = document.getElementById('myChart2');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4', 'Produto 5', 'Produto 6'],
    datasets: [{
      label: 'Compras nos Últimos 30 dias',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 2,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
    }]
  },
  options: {
   responsive: true,
  }
});

var myChart = new Chart(myChart2, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Permite que o tamanho seja ajustado
        width: 10,    // Defina a largura 
        height: 200   // Defina a altura 
        }
  });
