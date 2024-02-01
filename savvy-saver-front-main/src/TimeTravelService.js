export async function fetchStockData(company) {
  const API_KEY = '';
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
    console.log(data);
    return data;
    }
   catch (error) {
    console.log(error);
  }

}
