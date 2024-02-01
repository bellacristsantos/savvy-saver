function calculateCurInvestment(investmentAmount, StockData) {
  const timeSeries = StockData['Time Series (Daily)'];;
  const lastCloseDate = Object.keys(timeSeries).sort().reverse()[0]
  const lastCloseData = timeSeries[lastCloseDate]
  const lastClosePrice = parseFloat(lastCloseData['4. close']);
  const investmentReturn = investmentAmount * lastClosePrice;
  return investmentReturn;
}


function calculateInvestmentOnDate(investmentAmount, StockData, investmentDate) {
  const timeSeries = StockData['Time Series (Daily)'];
  const dateData = timeSeries[investmentDate];
  console.log(dateData);
  const lastClosePriceOnDate = parseFloat(dateData['4. close'])||0;
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

export { calculateCurInvestment, calculateInvestmentOnDate, calculateInvestmentReturn}
