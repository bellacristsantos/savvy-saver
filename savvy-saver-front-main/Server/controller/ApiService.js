exports.fetchStockData = async (company) => {
  const API_KEY = 'PZ08RP1MG1DZU3U3';
  const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&outputsize=full&apikey=${API_KEY}`;

  try {
    const response = await fetch(URL,{
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        'Content-Type': 'application/json'
      },
    })
    const data = await response.json();
    return data;
    }
   catch (error) {
    console.log(error);
  }

}
