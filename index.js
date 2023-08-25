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

var polarData = {
  labels: ['Feminino', 'Masculino'],
  datasets: [{
      data: [39, 4],
      backgroundColor: ['red', 'blue']
  }]
};

// Configurações do gráfico
var options = {
  responsive: true,
  maintainAspectRatio: false,
  scale: {
      ticks: {
          beginAtZero: true
      }
  }
};

// Criar o gráfico Polar Area
var polarCtx = document.getElementById('graf4_nat').getContext('2d');
var polarChart = new Chart(polarCtx, {
  type: 'polarArea',
  data: polarData,
  options: options
});
  
  
  // --------------------Residentes --------------------
  const dataLineBoundaries2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [50, 60, 70, 65, 80, 75],
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
  
  const optionsLineBoundaries2 = {
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
          text: 'Month',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Sales',
        },
      },
    },
  };
  
  const ctxLineBoundaries2 = document.getElementById('graf1_res').getContext('2d');
      new Chart(ctxLineBoundaries2, {
        type: 'line',
        data: dataLineBoundaries2,
        options: optionsLineBoundaries2,
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
  
  
 
  var polarData2 = {
    labels: ['Feminino', 'Masculino'],
    datasets: [{
        data: [58, 9],
        backgroundColor: ['red', 'blue']
    }]
  };
  
  // Configurações do gráfico
  var options2 = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
        ticks: {
            beginAtZero: true
        }
    }
  };
  
  // Criar o gráfico Polar Area
  var polarCtx2 = document.getElementById('graf4_res').getContext('2d');
  var polarChart2 = new Chart(polarCtx2, {
    type: 'polarArea',
    data: polarData2,
    options: options2
  });
  


