
const chartconfig = {
  type: 'line',
  data: {
    labels: '',
    datasets: [{
      label: 'Closing Prices',
      borderWidth: 1,
      fill: true,
      pointStyle: false,
      /* backgroundColor: 'blue',  */
      borderColor: 'red',
      data: '',
    },]
  },
  chartAreaBorder: {
    borderColor: 'black',
    borderWidth: 1,
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Company Closing Prices for the last year',
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      mode: 'index',
      intersect: true,
    },
    scales: {
      x: {
        type: 'timeseries',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'DD-MMM-YYYY',
          }
        },
        display: true,
        title: {
          display: true,
          text: 'Month'
        }, border: {
          color: 'black',
          borderWidth: 1,
        }
      },
      y: {
        type: 'linear',
        display: true,
        title: {
          display: true,
          text: 'Price  USD'
        },
        border: {
          color: 'black',
          borderWidth: 1,
          z:-1,
        }
      }
    }
  },
};

export default chartconfig;
