function calculateCurInvestment(investmentAmount, StockData,investmentDate) {
  const timeSeries = StockData['timeSeriesDaily'];
  const lastCloseDate = Object.keys(timeSeries).sort().reverse()[0]
  const lastCloseData = timeSeries[lastCloseDate]
  const lastClosePrice = parseFloat(lastCloseData['close']);

  const stockdatedata = timeSeries[investmentDate];
  const ClosePriceonDate = !stockdatedata ? 0 : parseFloat(stockdatedata['close']);
  const numberStocks = investmentAmount / ClosePriceonDate;
  const investmentReturn = numberStocks === Infinity || numberStocks === undefined ? 0 : numberStocks * lastClosePrice;

  const investment ={
    investmentReturn: investmentReturn,
    investmentReturnPercentage: ((investmentReturn - investmentAmount) / investmentAmount) * 100
  }
  return investment;
}


function calculateInvestmentOnDate(investmentAmount, StockData, investmentDate) {
  const timeSeries = StockData['timeSeriesDaily'];
  const date = timeSeries[investmentDate];
  const lastClosePriceOnDate =  !date ? 0 : parseFloat(date['close']);
  const investmentReturn = investmentAmount * lastClosePriceOnDate;
  return investmentReturn;
}


/* function calculateInvestmentReturn(Curinvestment, investmentOnDate) {
  const investment = {
    investmentReturn: Curinvestment - investmentOnDate,
    investmentReturnPercentage: ((Curinvestment - investmentOnDate) / investmentOnDate) * 100
  }
  return investment;
} */

function SetDateMaxLimit() {
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  const formattedDate = yesterday.toISOString().split('T')[0];
  return formattedDate;
}

function setDatetoyearAgo() {
  const today = new Date();
  const yearAgo = new Date(today.setFullYear(today.getFullYear() - 1));
  const formattedDate = yearAgo.toISOString().split('T')[0];
  return formattedDate;
}

function getClosingPrices(chartData) {

  const timeSeries = chartData[0];
  const lastyear = setDatetoyearAgo();
  const Data = Object.keys(timeSeries[0])
    .filter(date =>  date > lastyear)
    .map(date => ({
      date: date,
      closing: parseFloat(timeSeries[0][date]['close']) || 0
    }));
  return Data;
}

/* export { getClosingPrices,calculateCurInvestment, calculateInvestmentOnDate, SetDateMaxLimit } */

function calculateBestProfit(StockData, amount) {
  let listObject = StockData['Time Series (Daily)'];
  let min = null;
  let max = null;
  let bestProfitCombinations = [];
  let list = Object.entries(listObject).reverse();
  //console.log(list);
  list.forEach((data) => {
    let [key, item] = data;
    let value = parseFloat(item['4. close']);
    if (value < (min?.item?.['4. close'] || Infinity)) {
      if (min && max) {
        bestProfitCombinations.push({ min, max });
      }
      min = { item, key };
      max = null;
    } else if (value > (max?.item?.['4. close'] || -Infinity)) {
      max = { item, key };
    } else if (value < (max?.item?.['4. close'] || -Infinity)) {
      if (min && max) {
        bestProfitCombinations.push({ min, max });
      }
      min = { item, key };
      max = null;
    }
  });
  console.log(bestProfitCombinations);
  let bestProfit = bestProfitCombinations.reduce(
    (acc, item) => {
      let howManyCoinsIbought = amount / parseFloat(item.min.item['4. close']);

      let profit =
        parseFloat(item.max.item['4. close']) * howManyCoinsIbought - amount;
      if (profit > acc.value) {
        acc = {
          value: profit,
          buyDate: item.min.key,
          sellDate: item.max.key,
          buyPrice: item.min.item['4. close'],
          sellPrice: item.max.item['4. close'],
        };
      }
      return acc;
    },
    { value: 0, buyDate: null, sellDate: null },
  );
  return bestProfit;
  // {
  //   value: 222,
  //   buyDate: '2021-01-01',
  //   sellDate: '2021-01-02',
  // };
}

function calculateBuyAndKeep(StockData, amount) {
  let listObject = StockData['Time Series (Daily)'];
  let list = Object.entries(listObject).reverse();
  let first = list[0];
  let last = list[list.length - 1];

  let howManyCoinsIbought = amount / parseFloat(first[1]['4. close']);

  let buyAndKeep = {
    buyDate: first[0],
    sellDate: last[0],
    value: parseFloat(last[1]['4. close']) * howManyCoinsIbought - amount,
    buyPrice: first[1]['4. close'],
    sellPrice: last[1]['4. close'],
  };
  return buyAndKeep;
}

function buyOnHigh(StockData, amount) {
  let listObject = StockData['Time Series (Daily)'];
  let list = Object.entries(listObject).reverse();
  let first = list[0];
  list.forEach((data) => {
    let [key, item] = data;
    let value = parseFloat(item['4. close']);
    if (value > first[1]['4. close']) {
      first = data;
    }
  });
  let today = list[list.length - 1];

  let howManyCoinsIbought = amount / parseFloat(first[1]['4. close']);

  let result = {
    buyDate: first[0],
    sellDate: today[0],
    value: parseFloat(today[1]['4. close']) * howManyCoinsIbought - amount,
    buyPrice: first[1]['4. close'],
    sellPrice: today[1]['4. close'],
  };
  return result;
}

export {
  calculateCurInvestment,
  calculateInvestmentOnDate,
  calculateInvestmentReturn,
  SetDateMaxLimit,
  calculateBestProfit,
  calculateBuyAndKeep,
  buyOnHigh,
};
