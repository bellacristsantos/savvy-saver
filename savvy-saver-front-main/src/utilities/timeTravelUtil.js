function calculateCurInvestment(investmentAmount, StockData) {
  const timeSeries = StockData['timeSeriesDaily'];
  const lastCloseDate = Object.keys(timeSeries).sort().reverse()[0]
  const lastCloseData = timeSeries[lastCloseDate]
  const lastClosePrice = parseFloat(lastCloseData['close']);
  console.log('curprice',lastClosePrice);
  const investmentReturn = investmentAmount * lastClosePrice;
  return investmentReturn;
}


function calculateInvestmentOnDate(investmentAmount, StockData, investmentDate) {
  console.log(investmentDate);
  const timeSeries = StockData['timeSeriesDaily'];
  const date = timeSeries[investmentDate];
  const lastClosePriceOnDate = parseFloat(date['close'])||0;
  console.log(lastClosePriceOnDate);
  const investmentReturn = investmentAmount * lastClosePriceOnDate;
  return investmentReturn;
}


function calculateInvestmentReturn(Curinvestment, investmentOnDate) {
  const investment = {
    investmentReturn: Curinvestment - investmentOnDate,
    investmentReturnPercentage:((Curinvestment - investmentOnDate)/investmentOnDate)*100
  }
  return investment;
}

function SetDateMaxLimit(){
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  const formattedDate = yesterday.toISOString().split('T')[0];
  return formattedDate;
}

export { calculateCurInvestment, calculateInvestmentOnDate, calculateInvestmentReturn, SetDateMaxLimit}
