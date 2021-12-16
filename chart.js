var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',

      data: {
        labels: ["Janeiro", "Março", "Maio", "Julho", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [{
          label: "Casos de mortes devido ao COVID-19 no Brasil em 2021",
          backgroundColor: 'rgb(54,54,54)',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff',
          data: [1067, 2710, 1838, 1017, 541, 320, 231, 136]
        }]
      },
    });

    // ==========================================================================================
    // Tab II

    var ctxII = document.getElementById("tabII").getContext('2d');
    var tabII = new Chart(ctxII, {
      type: 'line',

      data: {
        labels: ["Janeiro", "Março", "Maio", "Julho", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [{
          label: "Parcela de pessoas vacinadas ontra COVID-19 no Brasil",
          backgroundColor: 'rgb(0,255,127)',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff',
          data: [0, 2126, 40394, 51024, 89292, 114804, 133938, 138190]
        }]
      },

    });