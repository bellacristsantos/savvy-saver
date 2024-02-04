exports.SetDateMaxLimit = () => {
  const today = new Date();
  //const yesterday = new Date(today.setDate(today.getDate() - 1));
  const formattedDate = today.toISOString().split('T')[0];
  return formattedDate;
}

exports.transformTimeSeries = (timeSeries) => {
  return Object.keys(timeSeries).reduce((map, date) => {
    const dayData = timeSeries[date];
    map.set(date, {
      open: dayData['1. open'],
      high: dayData['2. high'],
      low: dayData['3. low'],
      close: dayData['4. close'],
      volume: dayData['5. volume']
    });
    return map;
  }, new Map());
}
