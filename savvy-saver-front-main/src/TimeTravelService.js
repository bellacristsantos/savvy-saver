import { fakedata } from './fakeData';
export async function fetchStockData(company) {
  const companyCaps = company.toUpperCase();
  const URL = `http://127.0.0.1:3050/company/${companyCaps}`;

  try {
    const response = await fetch(URL, {
      method: 'GET',
      mode: 'cors',
    });
    const data = await response.json();
    if (data['Error Message'] || data.Information || !response.ok) {
      return fakedata;
    }
    //console.log(data);
    return data;
  } catch (error) {
    console.log('FE Error', error);
    return fakedata;
  }
}
