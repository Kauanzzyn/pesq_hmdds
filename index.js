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
  
  
  
  // Radar ----------------------------------------------------------
  
  const dataRadar = {
    labels: ['Strength', 'Speed', 'Agility', 'Stamina', 'Skill'],
    datasets: [{
      label: '18 ',
      data: [80, 75, 85, 90, 70],
      borderColor: 'rgba(255, 99, 132, 0.8)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }, {
      label: '35 à 49',
      data: [70, 85, 80, 75, 85],
      borderColor: 'rgba(54, 162, 235, 0.8)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    }],
  };
  
  const optionsRadar = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Radar Chart',
      fontSize: 20,
      padding: 20,
    },
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100,
      },
    },
  };
  
  const ctxRadar = document.getElementById('graf3_nat').getContext('2d');
  new Chart(ctxRadar, {
    type: 'radar',
    data: dataRadar,
    options: optionsRadar,
  });
  
  
  // PointStyle    ----------------------
  
  
  const dataPointStyle = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [50, 60, 70, 65, 80, 75],
      borderColor: '#36A2EB',
      borderWidth: 2,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      pointBackgroundColor: '#FF6384',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#FF6384',
      pointRadius: 6,
      pointHoverRadius: 8,
      pointStyle: 'rectRounded', // Estilo do ponto (rectRounded)
    }]
  };
  
  const optionsPointStyle = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Point Style Chart',
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
  
  const ctxPointStyle = document.getElementById('graf4_nat').getContext('2d');
  new Chart(ctxPointStyle, {
    type: 'line',
    data: dataPointStyle,
    options: optionsPointStyle,
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
  
  const dataRadar2 = {
    labels: ['Strength', 'Speed', 'Agility', 'Stamina', 'Skill'],
    datasets: [{
      label: 'Player 1',
      data: [80, 75, 85, 90, 70],
      borderColor: 'rgba(255, 99, 132, 0.8)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }, {
      label: 'Player 2',
      data: [70, 85, 80, 75, 85],
      borderColor: 'rgba(54, 162, 235, 0.8)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    }],
  };
  
  const optionsRadar2 = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Radar Chart',
      fontSize: 20,
      padding: 20,
    },
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100,
      },
    },
  };
  
  const ctxRadar2 = document.getElementById('graf3_res').getContext('2d');
  new Chart(ctxRadar2, {
    type: 'radar',
    data: dataRadar2,
    options: optionsRadar2,
  });
  
  
  // // PointStyle    ----------------------
  
  
  const dataPointStyle2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [50, 60, 70, 65, 80, 75],
      borderColor: '#36A2EB',
      borderWidth: 2,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      pointBackgroundColor: '#FF6384',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#FF6384',
      pointRadius: 6,
      pointHoverRadius: 8,
      pointStyle: 'rectRounded', // Estilo do ponto (rectRounded)
    }]
  };
  
  const optionsPointStyle2 = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Point Style Chart',
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
  
  const ctxPointStyle2 = document.getElementById('graf4_res').getContext('2d');
  new Chart(ctxPointStyle2, {
    type: 'line',
    data: dataPointStyle2,
    options: optionsPointStyle2,
  });
  
  


