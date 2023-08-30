// --------------------Residentes --------------------
      // Dados para o gráfico de rosca
      var doughnutData = {
        labels: ['Maçãs', 'Bananas', 'Laranjas'],
        datasets: [{
          data: [30, 20, 15],
          backgroundColor: ['red', 'yellow', 'orange']
        }]
      };
  
      // Dados para o gráfico de pizza
      var pieData = {
        labels: ['Carros', 'Bicicletas', 'Ônibus'],
        datasets: [{
          data: [50, 15, 10],
          backgroundColor: ['blue', 'green', 'purple']
        }]
      };
  
      // Opções para ambos os gráficos
      var chartOptions = {
        responsive: true,
        maintainAspectRatio: false
      };
  
      // Criando os gráficos
      var doughnutChart = new Chart(document.getElementById('doughnutChart'), {
        type: 'doughnut',
        data: doughnutData,
        options: chartOptions
      });
  
      var pieChart = new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: pieData,
        options: chartOptions
      });
    
    // pei------------------------------------------------
    
    
    const dataPie2 = {
      labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
      datasets: [{
        data: [20, 25, 15, 10, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#33FF33', '#FF9933'],
      }],
    };
    
    const optionsPie2 = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Pie Chart',
        fontSize: 20,
        padding: 20,
      },
    };
    
    const ctxPie2 = document.getElementById('graf2_res').getContext('2d');
    new Chart(ctxPie2, {
      type: 'pie',
      data: dataPie2,
      options: optionsPie2,
    });
    
    
    
    // // Radar ----------------------------------------------------------
    
    var databar2 = {
      labels: ['18 - 24', '25 - 29', '30 - 39', '40 - 49', '50 - 59'],
      datasets: [{
        label: 'Vendas Mensais',
        data: [18, 11, 11, 14, 3],
        backgroundColor: '#b1ccc4', // Cor das barras
        borderColor: '#4e5861', // Cor da borda das barras
        borderWidth: 1 // Largura da borda das barras
      }]
    };
  
    // Configurações do gráfico
    var optionsbar2 = {
      scales: {
        y: {
          beginAtZero: true // Começar o eixo Y a partir de 0
        }
      }
    };
  
    // Criando o gráfico de barras
    var ctxbar2 = document.getElementById('graf3_res').getContext('2d');
    new Chart(ctxbar2, {
      type: 'bar', // Tipo de gráfico (barra)
      data: databar2,
      options: optionsbar2
    });
    
    
    // // polar    ----------------------
    
    
   
      // Dados para o gráfico de rosca
      var doughnutData = {
        labels: ['Maçãs', 'Bananas', 'Laranjas'],
        datasets: [{
          data: [30, 20, 15],
          backgroundColor: ['red', 'yellow', 'orange']
        }]
      };
  
      // Dados para o gráfico de pizza
      var pieData = {
        labels: ['Carros', 'Bicicletas', 'Ônibus'],
        datasets: [{
          data: [50, 15, 10],
          backgroundColor: ['blue', 'green', 'purple']
        }]
      };
  
      // Opções para ambos os gráficos
      var chartOptions = {
        responsive: true,
        maintainAspectRatio: false
      };
  
      // Criando os gráficos
      var doughnutChart = new Chart(document.getElementById('graf4_res'), {
        type: 'doughnut',
        data: doughnutData,
        options: chartOptions
      });
  
      var pieChart = new Chart(document.getElementById('graf4_res'), {
        type: 'pie',
        data: pieData,
        options: chartOptions
      });
  