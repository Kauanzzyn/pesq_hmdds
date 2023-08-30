// line ------------------------------------------





const dataLineBoundaries = {
    labels: ['analfabetos', 'Fundamental Incompleto', 'Fundamental Completo', 'Ensino Médio Incompleto', 'Ensino Médio Completo'],
    datasets: [{
      label: 'Sales',
      data: [3, 15, 10, 6, 2],
      borderColor: '#36A2EB',
      borderWidth: 2,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      pointBackgroundColor: '#36A2EB',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#36A2EB',
      type: 'line',
      fill: true,
    }]
  };
  
  const optionsLineBoundaries = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Line Chart Boundaries',
      fontSize: 20,
      padding: 20,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'ESCOLARIDADE',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'RESGATADOS',
        },
      },
    },
  };
  
  const ctxLineBoundaries = document.getElementById('graf1_nat').getContext('2d');
      new Chart(ctxLineBoundaries, {
        type: 'line',
        data: dataLineBoundaries,
        options: optionsLineBoundaries,
      });
  
  
  // pei------------------------------------------------
  
  
  const dataPie = {
    labels: ['Branca', 'Parda', 'Preta', 'Indigena'],
    datasets: [{
      data: [27, 10, 2, 2],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#33FF33', '#FF9933'],
    }],
  };
  
  const optionsPie = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Pie Chart',
      fontSize: 20,
      padding: 20,
    },
  };
  
  const ctxPie = document.getElementById('graf2_nat').getContext('2d');
  new Chart(ctxPie, {
    type: 'pie',
    data: dataPie,
    options: optionsPie,
  });
  
  
  
  // Barras ----------------------------------------------------------
  
    // Dados para o gráfico
    var databar = {
      labels: ['18 - 24', '25 - 29', '30 - 39', '40 - 49', '50 - 59'],
      datasets: [{
        label: 'Vendas Mensais',
        data: [9, 6, 7, 10, ],
        backgroundColor: 'rgba(54, 162, 235, 0.7)', // Cor das barras
        borderColor: 'rgba(54, 162, 235, 1)', // Cor da borda das barras
        borderWidth: 1 // Largura da borda das barras
      }]
    };

    // Configurações do gráfico
    var optionsbar = {
      scales: {
        y: {
          beginAtZero: true // Começar o eixo Y a partir de 0
        }
      }
    };

    // Criando o gráfico de barras
    var ctxbar = document.getElementById('graf3_nat').getContext('2d');
    new Chart(ctxbar, {
      type: 'bar', // Tipo de gráfico (barra)
      data: databar,
      options: optionsbar
    });


  // Polar   ----------------------

    // Dados para o gráfico de rosca
    var doug = {
      labels: ['Maçãs', 'Bananas', 'Laranjas'],
      datasets: [{
        data: [30, 20, 15],
        backgroundColor: ['red', 'yellow', 'orange']
      }]
    };

    // Dados para o gráfico de pizza
    var pieD = {
      labels: ['Carros', 'Bicicletas', 'Ônibus'],
      datasets: [{
        data: [50, 15, 10],
        backgroundColor: ['blue', 'green', 'purple']
      }]
    };

    // Opções para ambos os gráficos
    var chartO = {
      responsive: true,
      maintainAspectRatio: false
    };

    // Criando os gráficos
    var dough = new Chart(document.getElementById('graf4_nat'), {
      type: 'doughnut',
      data: doug,
      options: chartO
    });

    var pieCh = new Chart(document.getElementById('graf4_nat'), {
      type: 'pie',
      data: pieD,
      options: chartO
    });
  
  
  