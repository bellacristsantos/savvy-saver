export async function fetchStockData(company) {
  const companyCaps = company.toUpperCase();
  const URL = `http://127.0.0.1:3050/company/${companyCaps}`;

  try {
    const response = await fetch(URL, {
      method: 'GET',
      mode: 'cors',
    })
    const data = await response.json();
    //console.log(data);
    return data;
  }
  catch (error) {
    console.log('FE Error',error);
  }

}

/* export async function fetchCompanyName(company) {
  const API_KEY = '';
  const URL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${company}&apikey=${API_KEY}`;

  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        'Content-Type': 'application/json'
      },
    })
    const data = await response.json();
    console.log(data);
    const companyList = [];
    for (const key in data.bestMatches) {
      const company = data.bestMatches[key];
      companyList.push({
        'symbol': company['1. symbol'],
        'name': company['2. name']
      });
    }
    return companyList;
  }
  catch (error) {
    console.log('Error with fetchCompanyName Funct', error);
  }
} */
