exports.fetchStockData = async (company) => {
  const API_KEY = '7K5W3OSOXZTYJGPH';
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
