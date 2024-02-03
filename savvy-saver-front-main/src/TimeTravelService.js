import { fakedata } from './fakeData';
export async function fetchStockData(company) {
  const API_KEY = 'UOGKWKYHYPNZ37C8';
  const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&outputsize=full&apikey=${API_KEY}`;

  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (data['Error Message'] || data.Information) {
      return fakedata;
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCompanyName(company) {
  const API_KEY = '';
  const URL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${company}&apikey=${API_KEY}`;

  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'User-Agent': 'request',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    const companyList = [];
    for (const key in data.bestMatches) {
      const company = data.bestMatches[key];
      companyList.push({
        symbol: company['1. symbol'],
        name: company['2. name'],
      });
    }
    return companyList;
  } catch (error) {
    console.log('Error with fetchCompanyName Funct', error);
  }
}
