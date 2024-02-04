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



export { getClosingPrices,calculateCurInvestment, calculateInvestmentOnDate, SetDateMaxLimit }
