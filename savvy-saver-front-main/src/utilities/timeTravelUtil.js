function calculateCurInvestment(investmentAmount, StockData) {
  const timeSeries = StockData['Time Series (Daily)'];
  if (timeSeries) {
    const lastCloseDate = Object.keys(timeSeries).sort().reverse()[0];
    const lastCloseData = timeSeries[lastCloseDate];
    const lastClosePrice = parseFloat(lastCloseData['4. close']);
    const investmentReturn = investmentAmount * lastClosePrice;
    return investmentReturn;
  } else {
    return null;
  }
}

function calculateInvestmentOnDate(
  investmentAmount,
  StockData,
  investmentDate,
) {
  const timeSeries = StockData['Time Series (Daily)'];
  if ((timeSeries, investmentDate)) {
    const dateData = timeSeries[investmentDate];
    console.log(dateData);
    const lastClosePriceOnDate = parseFloat(dateData['4. close']) || 0;
    console.log(lastClosePriceOnDate);
    const investmentReturn = investmentAmount * lastClosePriceOnDate;
    return investmentReturn;
  } else {
    return null;
  }
}

function calculateInvestmentReturn(Curinvestment, investmentOnDate) {
  if (Curinvestment && investmentOnDate) {
    const investment = {
      investmentReturn: Curinvestment - investmentOnDate,
      investmentReturnPercentage:
        ((Curinvestment - investmentOnDate) / investmentOnDate) * 100,
    };
    return investment;
  } else {
    return null;
  }
}

function SetDateMaxLimit() {
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  const formattedDate = yesterday.toISOString().split('T')[0];
  return formattedDate;
}

function calculateBestProfit(StockData) {
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
      let profit =
        parseFloat(item.max.item['4. close']) -
        parseFloat(item.min.item['4. close']);
      if (profit > acc.value) {
        acc = {
          value: profit,
          buyDate: item.min.key,
          sellDate: item.max.key,
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

function calculateBuyAndKeep(StockData) {
  let listObject = StockData['Time Series (Daily)'];
  let list = Object.entries(listObject).reverse();
  let first = list[0];
  let last = list[list.length - 1];
  let buyAndKeep = {
    buyDate: first[0],
    sellDate: last[0],
    value: parseFloat(last[1]['4. close']) - parseFloat(first[1]['4. close']),
  };
  return buyAndKeep;
}

function buyOnHigh(StockData) {
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
  let result = {
    buyDate: first[0],
    sellDate: today[0],
    value: parseFloat(today[1]['4. close']) - parseFloat(first[1]['4. close']),
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
